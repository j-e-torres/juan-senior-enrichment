import React, { Component } from 'react'
import { connect } from 'react-redux';

import { newCampus } from '../store'
import { formInputCreator } from '../helperFunctions';

class CampusForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageUrl: '',
            address: '',
            description: '',
            err: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange ({ target }){
        // console.log('Field Name: ', target.name, 'Field Value: ', target.value)
        // console.log('Current State of Campus Form: ', this.state);
        this.setState({[target.name]: target.value})
    }
    handleSubmit(ev) {
        ev.preventDefault();
        const { history } = this.props
        this.props.newCampus(this.state)
            .then( () => history.push('/campuses'))
            .catch(ex => this.setState({ err: ex.response.data.errors }))
    }
    render() {
        const {name, imageUrl, address, description, err } = this.state;
        const { handleSubmit, handleChange } = this;
        return (
            <div className="form-container">
                <h2>For the battle of Good</h2>
                <h1>A new Campus awaits</h1>
                <form onSubmit={handleSubmit}>
                {
                    !!err.length && (
                        <div className="err-list">
                        {
                            err.map( error => <div key={error}>{ error }</div>)
                        }
                        </div>
                    )
                 }

                    {formInputCreator('name', name, handleChange, 'Name')}
                    {formInputCreator('imageUrl', imageUrl, handleChange, 'Image URL')}
                    {formInputCreator('address', address, handleChange, 'Address')}
                    {formInputCreator('description', description, handleChange, 'Description')}

                    <div className="submit">
                        <input type="submit" value="Submit" className="submit" />
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        newCampus: (camp) => dispatch(newCampus(camp)),
        history: props.history
    }
};

export default connect(null, mapDispatchToProps)(CampusForm);

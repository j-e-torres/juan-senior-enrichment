import React, { Component } from 'react'
import { connect } from 'react-redux';

import { newCampus } from '../store'

class CampusForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageUrl: '',
            address: '',
            description: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange ({ target }){
        this.setState({[target.name]: target.value})
    }


    handleSubmit(ev) {
        ev.preventDefault();
        const { history } = this.props
        this.props.newCampus(this.state);
        history.push('/campuses');

    }

    render() {
        const { handleSubmit, handleChange } = this;
        return (
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} />

                <label>Image URL</label>
                <input type="text" name="imageUrl" onChange={handleChange} />

                <label>Address</label>
                <input type="text" name="address" onChange={handleChange} />

                <label>Campus Description</label>
                <input type="text" name="description" onChange={handleChange} />

                <button type="submit">Add Campus</button>

            </form>
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

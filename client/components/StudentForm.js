import React, { Component } from 'react'
import { connect } from 'react-redux';

import { newStudent } from '../store';
import { formInputCreator } from '../helperFunctions';

class StudentForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gpa: 0,
            imageUrl: '',
            email: '',
            err: []
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
        this.props.newStudent(this.state)
            .then( () => history.push('/students'))
            .catch( ex => ex.reponse.data.message )
    }
    render() {
        const { firstName, lastName, gpa, imageUrl, email, err } = this.state;
        const { handleSubmit, handleChange } = this;

        return (
            <div className="form-container">
                <h2>It's now or never</h2>
                <h1>Hero, Join Us</h1>

                <form onSubmit={handleSubmit}>

                    {formInputCreator(firstName, handleChange, 'First Name')}
                    {formInputCreator(lastName, handleChange, 'Last Name')}
                    {formInputCreator(gpa, handleChange, 'GPA')}
                    {formInputCreator(imageUrl, handleChange, 'Image URL')}
                    {formInputCreator(email, handleChange, 'Email Address')}

                    <div className="submit">
                        <input onClick={handleSubmit} type="button" value="Submit" className="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        newStudent: (camp) => dispatch(newStudent(camp)),
        history: props.history
    }
};

export default connect(null, mapDispatchToProps)(StudentForm);

import React, { Component } from 'react'
import { connect } from 'react-redux';

import { newStudent } from '../store'

class StudentForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gpa: '',
            imageUrl: '',
            email: ''
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
        this.props.newStudent(this.state);
        history.push('/students');

    }

    render() {
        const { handleSubmit, handleChange } = this;
        return (
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={handleChange} />

                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} />

                <label>GPA</label>
                <input type="text" name="gpa" onChange={handleChange} />

                <label>Image URL</label>
                <input type="text" name="imageUrl" onChange={handleChange} />

                <label>Email</label>
                <input type="text" name="email" onChange={handleChange} />


                <button type="submit">Add Campus</button>

            </form>
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

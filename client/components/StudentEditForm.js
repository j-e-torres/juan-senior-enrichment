import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateStudent } from '../store';

import { formInputCreator } from '../helperFunctions'

class StudentEditForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gpa: 0,
            imageUrl: '',
            email: '',
            err: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange({ target}) {
        this.setState({[target.name]: target.value })
    }
    handleSubmit(ev) {
        ev.preventDefault();
        const { history } = this.props;
        this.props.updateStudent()
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStudent: (id) => dispatch(updateStudent(id)),
        history: props.history
    }
};

export default connect(null, mapDispatchToProps)(StudentEditForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { seedStudent } from '../store';


class Student extends Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.seedStudent(match.params.id);
    }

    render() {
        const { student } = this.props;
        const { campus } = student;

        return (
            <div>
                <header>
                    {student.firstName} {student.lastName}
                    <br />
                    <img src={student.imageUrl} />
                    <br />
                    Email: {student.email}
                    <br />
                    GPA: {student.gpa}
                </header>

                <section>

                        {campus ?
                            <Link to={`/campuses/${campus.id}`}>
                            Campus: {campus.name}
                            </Link>

                            : null }

                </section>
            </div>
        )
    }
}

const mapStateToProps = ({ student }) => {
    return {
        student
    }
}

const mapDispatchToProps = dispatch => {
    return {
        seedStudent: (id) => dispatch(seedStudent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);

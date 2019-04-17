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

        console.log('here is student', student)

        return (
            <div className="list-campus-student">

                { Object.keys(student).length ?
                <div className="list-item">
                    {student.firstName} {student.lastName}
                    <br />
                    <img width="75%" src={student.imageUrl} />
                    <br />
                    Email: {student.email}
                    <br />
                    GPA: {student.gpa}
                    <br />
                    {
                        campus ?
                        <Link to={`/campuses/${campus.id}`}>
                        Campus: {campus.name}
                        </Link>

                        : null
                    }
                </div>

                    :   <div>
                            404, Error: Not student found
                        </div>
                }
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

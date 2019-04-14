import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteStudent } from '../store';

const Students = ({ students, deleteS }) => {

    return (
        <ul>
        {
            students.map( student => {
                return (
                    <li key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                    </Link>
                    <button onClick={() => deleteS(student.id) } type="submit">X</button>
                        <br />
                        <img width="300px" src={student.imageUrl} />
                    </li>
                )
            })
        }
        </ul>
    )
}

const mapStateToProps = ({ students }) => {
    return {
        students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteS: (id) => dispatch(deleteStudent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);

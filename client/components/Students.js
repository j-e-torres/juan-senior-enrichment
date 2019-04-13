import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Students = ({ students }) => {

    return (
        <ul>
        {
            students.map( student => {
                return (
                    <li key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                    </Link>
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

export default connect(mapStateToProps)(Students);

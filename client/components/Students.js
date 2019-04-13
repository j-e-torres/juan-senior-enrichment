import React from 'react';
import { connect } from 'react-redux';

const Students = ({ students }) => {

    return (
        <ul>
        {
            students.map( student => {
                return (
                    <li key={student.id}>
                        {student.firstName} {student.lastName}
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

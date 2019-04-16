import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteStudent } from '../store';

const Students = ({ students, deleteS }) => {

    return (
        <div className="list-campus-student">
        {
            students.map( student => {
                return (
                    <div key={student.id} className="list-item">
                        <Link to={`/students/${student.id}`}>
                            {student.firstName} {student.lastName}
                        </Link>
                        <div>
                            <button onClick={() => deleteS(student.id) } className="delete-btn" type="submit">X</button>
                        </div>
                            <br />
                            <img height="50%" width="75%" src={student.imageUrl} />
                    </div>
                )
            })
        }
        </div>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteCampus } from '../store';

const Campuses = ({ campuses, deleteC }) => {

    return (
        <ul>
        {
            campuses.map( campus => {
                return (
                    <li key={campus.id}>
                        <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                        <button onClick={() => deleteC(campus.id) } type="submit">X</button>
                        <br />
                        <img width="300px" src={campus.imageUrl} />
                    </li>
                )
            })
        }
        </ul>
    )
}

const mapStateToProps = ({campuses}) => {
    return {
        campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteC: (id) => dispatch(deleteCampus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);

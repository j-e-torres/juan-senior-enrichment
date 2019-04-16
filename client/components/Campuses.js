import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteCampus } from '../store';

const Campuses = ({ campuses, deleteC }) => {

    return (
        <div className="list-campus-student">
        {
            campuses.map( campus => {
                return (
                    <div key={campus.id} className="list-item">
                        <div className="name-div">
                            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                        </div>

                        <div className="btn-div">
                            <button onClick={() => deleteC(campus.id) } className="delete-btn" type="submit">X</button>
                        </div>

                        <div className="image-div">
                            <img width="100%" src={campus.imageUrl} />
                        </div>
                    </div>
                )
            })
        }
        </div>
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

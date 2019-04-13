import React from 'react';
import { connect } from 'react-redux';

const Campuses = ({ campuses }) => {

    return (
        <ul>
        {
            campuses.map( campus => {
                return (
                    <li key={campus.id}>
                        {campus.name}
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

export default connect(mapStateToProps)(Campuses);

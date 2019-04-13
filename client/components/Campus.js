import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { seedCampus } from '../store';


class Campus extends Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.seedCampus(match.params.id);
    }

    render() {
        const { campus } = this.props;
        const { students } = campus;

        return (
            <div>
                <header>
                    {campus.name}
                    <br />
                    <img src={campus.imageUrl} />
                    <br />
                    <em>{campus.address}</em>
                    <br />
                    {campus.description}
                </header>

                <ul>
                    {
                        students ? students.map( student => {
                            return (
                                <li key={student.id}>
                                    <Link to={`/students/${student.id}`}>
                                    {student.firstName} {student.lastName}
                                    </Link>
                                </li>
                            )
                        }) : null

                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ campus }) => {
    return {
        campus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        seedCampus: (id) => dispatch(seedCampus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus);

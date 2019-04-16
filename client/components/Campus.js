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

                    <div className="home-header" style={{marginBottom: '20px'}}>{campus.name}</div>

                    <div className="home-about">
                        <img src={campus.imageUrl} />
                        <br />
                        <em>{campus.address}</em>

                        <div style={{marginBottom: '30px'}}>
                            {campus.description}
                        </div>
                    </div>

                <div className="list-campus-student">
                    {
                        students ? students.map( student => {
                            return (
                                <div className="list-item" key={student.id}>
                                    <Link to={`/students/${student.id}`}>
                                    {student.firstName} {student.lastName}
                                    </Link>
                                    <img width="75%" src={student.imageUrl} />
                                </div>
                                
                            )
                        }) : null

                    }
                </div>
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

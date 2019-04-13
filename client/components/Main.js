import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import Home from './Home';

import Campuses from './Campuses';
import Campus from './Campus'

import Students from './Students';
import Student from './Student';

import { seedStudents, seedCampuses } from '../store'

class Main extends Component {
    componentDidMount() {
        this.props.seedData();
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <h1>Superhero University</h1>
                    <Route component={ Nav } />
                    <Route exact path="/" component={ Home } />

                    <Route exact path="/campuses" component={ Campuses } />
                    <Route exact path="/campuses/:id" component={ Campus } />

                    <Route exact path="/students" component={ Students } />
                    <Route exact path="/students/:id" component={ Student } />
                </Fragment>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        seedData: () => {
            dispatch(seedCampuses());
            dispatch(seedStudents());
        }
    }
}

export default connect(null, mapDispatchToProps)(Main);

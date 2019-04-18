import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import Home from './Home';

import Campuses from './Campuses';
import Campus from './Campus';
import CampusForm from './CampusForm';

import Students from './Students';
import Student from './Student';
import StudentForm from './StudentForm';
import StudentEditForm from './StudentEditForm';

import { seedStudents, seedCampuses } from '../store';

class Main extends Component {
    componentDidMount() {
        this.props.seedData();
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <h1 className="main-header">SUPERHERO UNIVERSITY</h1>
                    <Route component={ Nav } />
                    <Route exact path="/" component={ Home } />

                    <Route exact path="/campuses" component={ Campuses } />
                    <Route exact path="/campuses/:id" component={ Campus } />
                    <Route exact path="/createCampus" component={ CampusForm } />
                    {/* <Route exact path="/createCampus/:id" component={ CampusForm } /> */}

                    <Route exact path="/students" component={ Students } />
                    <Route exact path="/students/:id" component={ Student } />
                    <Route exact path="/createStudent" component={ StudentForm } />
                    <Route exact path="/editStudent/:id" component={ StudentEditForm } />
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

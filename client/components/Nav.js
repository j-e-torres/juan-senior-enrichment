import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const Navtabs = [
    {name: 'Home', path: '/'},
    {name: 'Campuses', path: '/campuses'},
    {name: 'Students', path: '/students'},
    {name: 'Add a Campus', path: '/createCampus'},
    {name: 'Add a Student', path: '/createStudent'}
]

const Nav = () => {
    return (
        <div>
            <ul className="navbar">
                {
                    Navtabs.map( tab => {
                        return (
                            <li key={tab.path} className="nav-tab">
                                <Link to={tab.path} className="nav-link active">
                                    {tab.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav

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
        <ul>
            {
                Navtabs.map( tab => {
                    return (
                        <li key={tab.path}>
                            <Link to={tab.path}>
                                {tab.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav

import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//actions
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

//action creators
const getStudents = students => ({
    type: GET_STUDENTS,
    students
})

const getCampuses = campuses => ({
    type: GET_CAMPUSES,
    campuses
})

//reducers
const students = (state = [], action) => {
    switch ( action.type ) {
        case GET_STUDENTS:
            return action.students;

        default:
            return state;
    }
}

const campuses = (state = [], action) => {
    switch ( action.type ) {
        case GET_CAMPUSES:
            return action.campuses;

        default:
            return state;
    }
}

const reducer = combineReducers({
    campuses,
    students
})

//thunks
const seedStudents = () => {
    return dispatch => {
        return axios.get('/api/students')
            .then( ({ data }) => dispatch(getStudents(data)))
    }
}

const seedCampuses = () => {
    return dispatch => {
        return axios.get('/api/campuses')
            .then( ({ data }) => dispatch(getCampuses(data)));
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export {
    seedCampuses,
    seedStudents
}

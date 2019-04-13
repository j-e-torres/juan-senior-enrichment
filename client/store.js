import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//actions
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

//action creators
const getStudents = students => ({
    type: GET_STUDENTS,
    students
})

const getStudent = student => ({
    type: GET_STUDENT,
    student
})

const getCampuses = campuses => ({
    type: GET_CAMPUSES,
    campuses
})

const getCampus = campus => ({
    type: GET_CAMPUS,
    campus
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

const campus = (state = {}, action) => {
    switch ( action.type ) {
        case GET_CAMPUS:
            return action.campus;

        default:
            return state;
    }
}

const student = (state = {}, action) => {
    switch ( action.type ) {
        case GET_STUDENT:
            return action.student;

        default:
            return state;
    }
}

const reducer = combineReducers({
    campuses,
    students,
    campus,
    student
})

//thunks
const seedStudents = () => {
    return dispatch => {
        return axios.get('/api/students')
            .then( ({ data }) => dispatch(getStudents(data)))
    }
}

const seedStudent = (id) => {
    return dispatch => {
        return axios.get(`/api/students/${id}`)
            .then( ({ data }) => dispatch(getStudent(data)))
    }
}

const seedCampuses = () => {
    return dispatch => {
        return axios.get('/api/campuses')
            .then( ({ data }) => dispatch(getCampuses(data)));
    }
}

const seedCampus = (id) => {
    return dispatch => {
        return axios.get(`/api/campuses/${id}`)
            .then( ({ data }) => dispatch(getCampus(data)))
    }
}


//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export {
    seedCampuses,
    seedStudents,
    seedCampus,
    seedStudent
}

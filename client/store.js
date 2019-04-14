import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//actions
const ADD_STUDENT = 'ADD_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

//action creators
const addStudent = student => ({
    type: ADD_STUDENT,
    student
})
const getStudents = students => ({
    type: GET_STUDENTS,
    students
})

const getStudent = student => ({
    type: GET_STUDENT,
    student
})

const addCampus = campus => ({
    type: ADD_CAMPUS,
    campus
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

        case ADD_STUDENT:
            return [...state, action.student];

        default:
            return state;
    }
}

const campuses = (state = [], action) => {
    switch ( action.type ) {
        case GET_CAMPUSES:
            return action.campuses;
        case ADD_CAMPUS:
            return [...state, action.campus]

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

const newCampus = (ca) => {
    return dispatch => {
        return axios.post('/api/campuses', ca)
            .then( ({ data }) => dispatch(addCampus(data)))
    }
}

const newStudent = (stu) => {
    return dispatch => {
        return axios.post('/api/students', stu)
            .then( ({ data }) => dispatch(addStudent(data)))
    }
}


//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export {
    seedCampuses,
    seedStudents,
    seedCampus,
    seedStudent,
    newCampus,
    newStudent
}

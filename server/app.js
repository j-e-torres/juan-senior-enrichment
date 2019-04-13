const express = require('express');
const app = express();
const path = require('path');

const { Campus, Student } = require('./db')

module.exports = app;

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'public')))


app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

app.get('/api/students', (req, res, next) => {
    Student.findAll()
        .then( students => res.send(students))
        .catch(next);
});

app.get('/api/campuses', (req, res, next) => {
    Campus.findAll()
        .then( campuses => res.send(campuses))
        .catch(next);
});


//error
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500)
    res.send(err.message || 'Internal server error')
})

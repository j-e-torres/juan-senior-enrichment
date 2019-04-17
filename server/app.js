const express = require('express');
const app = express();
const path = require('path');

const { Campus, Student } = require('./db')

module.exports = app;

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));

//get all
app.get('/api/students', (req, res, next) => {
    Student.findAll()
        .then( students => res.send(students))
        .catch(next);
});

app.get('/api/campuses', (req, res, next) => {
    Campus.findAll({
        include: [Student]
    })
        .then( campuses => res.send(campuses))
        .catch(next);
});

//get single
app.get('/api/campuses/:id', (req, res, next) => {
    Campus.findByPk(req.params.id, {
        include: [Student]
    })
    .then( data => {
        if ( data ) {
            res.send(data)
        }
        else {
            res.sendStatus(404);
        }
    })
    .catch(next);
})

app.get('/api/students/:id', (req, res, next) => {
    Student.findByPk(req.params.id, {
        include: [Campus]
    })
    .then( data => {
        if (data) {
            res.send(data)
        }
        else {
            res.sendStatus(404);
        }
    })
    .catch(next);
})

//add one
app.post('/api/campuses', (req, res, next) => {
    console.log('POST to api/campuses: ', req.body);

    Campus.create({
        name: req.body.name,
        address: req.body.address,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    })
    .then( campus => res.send(campus))
    .catch(next);
})

app.post('/api/students', (req, res, next) => {
    Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gpa: req.body.gpa,
        imageUrl: req.body.imageUrl,
        email: req.body.email
    })
    .then( campus => res.send(campus))
    .catch(next);
})

//delete one
app.delete('/api/students/:id', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( () => res.sendStatus(204))
    .catch(next)
})

app.delete('/api/campuses/:id', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( () => {
        res.sendStatus(204)
    })
    .catch(next)
})

//error
app.use((error, req, res, next)=> {
    let errors = [error];
    if ( error.errors){
      errors = error.errors.map( err => err.message);
    }
    else if (error.original){
      errors = [error.original.message];
    }

    console.error(errors);
    res.status(error.status || 500).send({ errors });
  });

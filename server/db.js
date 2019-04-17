const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    logging: false
});

const { campusesArr } = require('./seed');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {args: [true], msg: 'Name cannot be empty'}
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: null
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {args: [true], msg: 'Address cannot be empty'}
        }
    },
    description: {
        type: Sequelize.TEXT,
    }
})

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {args: [true], msg: 'First name cannot be empty'}
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {args: [true], msg: 'Last name cannot be empty'}
        }
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {args: [true], msg: 'Email cannot be empty'},
            isEmail: {args: [true], msg: 'Email must be a valid email'}
        }

    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: null
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: {args: [0], msg: 'GPA must be between 0 and 4'},
            max: {args: [4], msg: 'GPA must be between 0 and 4'}
        }
    }
})

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = () => {
    return db.sync({ force: true })
        .then( () => Promise.all([
            Promise.all([ campusesArr.map( campus => Campus.create({
                name: campus.name,
                imageUrl: campus.imageUrl,
                address: campus.address,
                description: campus.description
            }))]),
            Promise.all([
                Student.create({
                    firstName: 'Bruce',
                    lastName: 'Wayne',
                    email: 'batman@hallofjustice.com',
                    imageUrl: '/heropics/Batman.jpg',
                    gpa: 4.0,
                    campusId: 1
                }),
                Student.create({
                    firstName: 'Diana',
                    lastName: 'Prince',
                    email: 'wonderwoman@hallofjustice.com',
                    imageUrl: '/heropics/wonderwoman.jpg',
                    gpa: 3.75,
                    campusId: 1
                }),
                Student.create({
                    firstName: 'Clark',
                    lastName: 'Kent',
                    email: 'superman@hallofjustice.com',
                    imageUrl: '/heropics/superman.jpg',
                    gpa: 3.25,
                    campusId: 1
                }),
                Student.create({
                    firstName: 'Damian',
                    lastName: 'Wayne',
                    email: 'robin@titanstower.com',
                    imageUrl: '/heropics/damianrobin.png',
                    gpa: 4.0,
                    campusId: 2
                }),
                Student.create({
                    firstName: 'Princess',
                    lastName: "Koriand'r",
                    email: 'starfire@titanstower.com',
                    imageUrl: '/heropics/starfire.png',
                    gpa: 3,
                    campusId: 2
                }),
                Student.create({
                    firstName: 'Rachel',
                    lastName: 'Roth',
                    email: 'raven@titanstower.com',
                    imageUrl: '/heropics/raven.jpg',
                    gpa: 3,
                    campusId: 2
                }),
            ])
        ]))

};

module.exports = {
    db,
    Student,
    Campus,
    syncAndSeed
};

import { Sequelize } from "sequelize/types";

const User = conn.define('user', {
    email: {
        type: Sequelize.toString,
        alllowNull: false,
        validate: {
            notEmpty: true
        }
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: Sequelize.ENUM('active', 'inactive', 'unknown'),
        allowNull: false
    }
});

const findDeletedUsers= function() {
    return this.findAll({
        where: { isDeleted: true}
    })
}

//
User.belongsTo(Role);
Role.hasMany(User);

app.get('/roles/:id/users', (req, res, next) => {
    User.findAll({
        where: {
            roleId: req.params.id
        }
    })
    .then( users => res.send(users))
    .catch(next);
})

const sequelize=require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const user = sequelize.define('user', {

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false

})

sequelize.authenticate()
    .then(() => {
        console.log('connection esstablish')
    }).catch((err) => {
        console.log('err')
    })

sequelize.sync({ alter: true });

module.exports=user;
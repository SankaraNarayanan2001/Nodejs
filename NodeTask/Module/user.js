const sequelize=require('../config/db');
const { Sequelize, DataTypes } = require('sequelize');

const user = sequelize.define('user', {
   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
       
      },

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

sequelize.sync({ force: true });

module.exports=user;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('jwt', 'root', 'root123', {
    dialect:'mysql'
});

module.exports = sequelize;
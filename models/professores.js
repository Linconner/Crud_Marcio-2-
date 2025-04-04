const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Professor = sequelize.define('Professor', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Professor;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário

const Aluno = sequelize.define('Aluno', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Aluno;
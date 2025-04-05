const { UniqueConstraintError } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define("Professor", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    formacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    materia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Professor;
};

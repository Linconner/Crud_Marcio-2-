module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define("Aluno", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matricula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itinerario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Aluno;
};

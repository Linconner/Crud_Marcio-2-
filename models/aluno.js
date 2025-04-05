module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define("aluno", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, //só um aluno pode ter uma matrícula
      },
      itinerario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Aluno;
  };
  
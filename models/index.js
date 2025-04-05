const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(config.development);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Professores = require("./professores")(sequelize, DataTypes);
db.Aluno = require("./aluno")(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



module.exports = db;
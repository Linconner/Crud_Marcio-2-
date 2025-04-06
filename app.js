const express = require("express");
const path = require("path");
const app = express();
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos como CSS e imagens
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
const professorRouter = require("./routes/professores");
const alunoRouter = require("./routes/alunos");

app.use("/", indexRouter);
app.use("/professores", professorRouter);
app.use("/alunos", alunoRouter);

db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco estabelecida');
    return db.sequelize.sync();
  })
  .then(() => {
    console.log('Modelos sincronizados');
    app.listen(3000, () => {
      console.log("Servidor em execução na porta 3000");
    });
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco:', err);
    process.exit(1);
  });

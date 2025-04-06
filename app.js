const express = require("express");
const path = require("path");
const app = express();
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos (CSS, imagens, etc)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração da view engine EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rotas
const indexRouter = require("./routes/index");
const professorRouter = require("./routes/professores");
const alunoRouter = require("./routes/alunos");

app.use("/", indexRouter);
app.use("/professores", professorRouter);
app.use("/alunos", alunoRouter);

// Sincroniza com o banco de dados e, se não estiver em produção, inicia o servidor
db.sequelize.sync()
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      app.listen(3000, () => {
        console.log("Servidor em execução na porta 3000");
      });
    }
  })
  .catch(err => {
    console.error("Erro ao conectar com o banco:", err);
    process.exit(1);
  });

// Exporta o app para que a Vercel possa usá-lo
module.exports = app;

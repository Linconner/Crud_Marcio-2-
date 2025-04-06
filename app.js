const express = require("express");
const path = require("path");
const app = express();
const db = require("./models");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (CSS, imagens, etc)
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

// Sincroniza com o banco de dados
db.sequelize.sync();

// Exporta o app para Vercel usar
module.exports = app;

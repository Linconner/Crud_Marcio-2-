const express = require("express");
const path = require("path");
const app = express();
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rotas para categorias
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

// Iniciar o servidor e sincronizar com o banco de dados
db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor em execução na porta 3000");
    });
});
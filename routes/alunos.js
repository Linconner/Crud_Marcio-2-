const express = require("express");
const router = express.Router();
const { Aluno } = require("../models");

// Listar alunos
router.get("/", async (req, res) => {
  const alunos = await Aluno.findAll();
  res.render("base", {
    title: "Alunos",
    view: "alunos/show",
    alunos,
  });
});

// Formulário de adicionar
router.get("/add", (req, res) => {
  res.render("base", {
    title: "Adicionar Aluno",
    view: "alunos/add",
  });
});

// Criar aluno
router.post("/add", async (req, res) => {
  await Aluno.create({
    nome: req.body.nome,
    matricula: req.body.matricula,
    horario: req.body.horario,
    itinerario: req.body.itinerario,
  });
  res.redirect("/alunos");
});

// Formulário de edição
router.get("/edit/:id", async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  res.render("base", {
    title: "Editar Aluno",
    view: "alunos/edit",
    aluno,
  });
});

// Atualizar aluno
router.post("/edit/:id", async (req, res) => {
  await Aluno.update(
    {
      nome: req.body.nome,
      matricula: req.body.matricula,
      horario: req.body.horario,
      itinerario: req.body.itinerario,
    },
    { where: { id: req.params.id } }
  );
  res.redirect("/alunos");
});

// Deletar aluno
router.post("/delete/:id", async (req, res) => {
  await Aluno.destroy({ where: { id: req.params.id } });
  res.redirect("/alunos");
});

module.exports = router;

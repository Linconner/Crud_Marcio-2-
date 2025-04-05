const express = require("express");
const router = express.Router();
const { Aluno } = require("../models"); // com letra maiúscula

// Listar todos os alunos
router.get("/", async (req, res) => {
  const alunos = await Aluno.findAll();
  res.render("base", {
    title: "Alunos",
    view: "aluno/show",
    alunos,
  });
});

// Formulário para adicionar aluno
router.get("/add", (req, res) => {
  res.render("base", {
    title: "Adicionar Aluno",
    view: "aluno/add",
  });
});

// Adicionar novo aluno
router.post("/add", async (req, res) => {
  await Aluno.create({
    nome: req.body.nome,
    horario: req.body.horario,
    matricula: req.body.matricula,
    itinerario: req.body.itinerario,
  });
  res.redirect("/aluno");
});

// Formulário para editar aluno
router.get("/edit/:id", async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  res.render("base", {
    title: "Editar Aluno",
    view: "aluno/edit",
    aluno,
  });
});

// Atualizar aluno
router.post("/edit/:id", async (req, res) => {
  await Aluno.update(
    {
      nome: req.body.nome,
      horario: req.body.horario,
      matricula: req.body.matricula,
      itinerario: req.body.itinerario,
    },
    { where: { id: req.params.id } }
  );
  res.redirect("/aluno");
});

// Deletar aluno
router.post("/delete/:id", async (req, res) => {
  await Aluno.destroy({ where: { id: req.params.id } });
  res.redirect("/aluno");
});

module.exports = router;

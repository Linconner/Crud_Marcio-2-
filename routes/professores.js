const express = require("express");
const router = express.Router();
const { Professor } = require("../models");

router.get("/", async (req, res) => {
  const professores = await Professor.findAll();
  res.render("base", {
    title: "Professores",
    view: "professores/show",
    professores,
  });
});

router.get("/add", (req, res) => {
  res.render("base", {
    title: "Add Professor",
    view: "professores/add",
  });
});

router.post("/add", async (req, res) => {
  await Professor.create({
    nome: req.body.nome,
    email: req.body.email,
    formacao: req.body.formacao,
    materia: req.body.materia,
    horario: req.body.horario,
  });
  res.redirect("/professores");
});

router.get("/edit/:id", async (req, res) => {
  const professor = await Professor.findByPk(req.params.id);
  res.render("base", {
    title: "Editar Professor",
    view: "professores/edit",
    professor,
  });
});

router.post("/edit/:id", async (req, res) => {
  await Professor.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      formacao: req.body.formacao,
      materia: req.body.materia,
      horario: req.body.horario,
    },
    { where: { id: req.params.id } }
  );
  res.redirect("/professores");
});

router.post("/delete/:id", async (req, res) => {
  await Professor.destroy({ where: { id: req.params.id } });
  res.redirect("/professores");
});

module.exports = router;
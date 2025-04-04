const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');

// CRUD para Alunos
router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll();
    res.render('alunos/show', { alunos });
});

router.get('/add', (req, res) => {
    res.render('alunos/add');
});

router.post('/add', async (req, res) => {
    await Aluno.create(req.body);
    res.redirect('/alunos');
});

router.get('/edit/:id', async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id);
    res.render('alunos/edit', { aluno });
});

router.post('/edit/:id', async (req, res) => {
    await Aluno.update(req.body, { where: { id: req.params.id } });
    res.redirect('/alunos');
});

router.post('/delete/:id', async (req, res) => {
    await Aluno.destroy({ where: { id: req.params.id } });
    res.redirect('/alunos');
});

module.exports = router;
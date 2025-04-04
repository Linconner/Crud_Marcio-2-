const express = require('express');
const router = express.Router();
const Professor = require('../models/professor');

// CRUD para Professores
router.get('/', async (req, res) => {
    const professores = await Professor.findAll();
    res.render('professores/show', { professores });
});

router.get('/add', (req, res) => {
    res.render('professores/add');
});

router.post('/add', async (req, res) => {
    await Professor.create(req.body);
    res.redirect('/professores');
});

router.get('/edit/:id', async (req, res) => {
    const professor = await Professor.findByPk(req.params.id);
    res.render('professores/edit', { professor });
});

router.post('/edit/:id', async (req, res) => {
    await Professor.update(req.body, { where: { id: req.params.id } });
    res.redirect('/professores');
});

router.post('/delete/:id', async (req, res) => {
    await Professor.destroy({ where: { id: req.params.id } });
    res.redirect('/professores');
});

module.exports = router;
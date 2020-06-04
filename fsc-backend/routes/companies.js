const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companies');
const mw = require('../util/middleware');

router.get('/', async (req, res, next) => {
  const result = await companiesController.getAllCompanies();
  res.send(result);
});

router.get('/:id', mw.checkIfExists('companies'), async (req, res, next) => {
  const result = await companiesController.getOneCompany(req.params.id);
  res.send(result);
});

module.exports = router;
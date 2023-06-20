const express = require('express');
const router = express.Router();
const motoController = require('../controllers/moto.controller')


router.post('/add', motoController.addNewMoto);
router.get('/all',motoController.getAllMotos);

module.exports = router;

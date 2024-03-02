const express = require('express');

const routes = express.Router();
const usuario = require('../controllers/UserController.js')

routes.post('/usuarios', usuario.store)

module.exports = routes
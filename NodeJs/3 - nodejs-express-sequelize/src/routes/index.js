const express = require('express');
const pessoas = require('./pessoasRoutes.js');
const categoria = require('./categoriasRoutes.js');
const curso = require('./cursosRoutes.js');


module.exports = (app)=>{
    app.use(express.json());
    app.use(pessoas, categoria, curso);
}
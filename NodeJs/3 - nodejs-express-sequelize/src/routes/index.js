const express = require('express')
const pessoas = require('./pessoasRoutes.js')


module.exports = (app)=>{
    app.use(
        express.json(),
        pessoas,
    );
}
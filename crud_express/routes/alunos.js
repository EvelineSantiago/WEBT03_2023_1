var express = require('express');
var router = express.Router();
var alunoServiceMongo = require('../services/aluno.service.mongo');

router.get(
    "/listar",
    (res, req, next) => {
        alunoServiceMongo.list(req, res);
    }
)

router.post(
    "/cadastrar",
    (res, req, next) => {
        alunoServiceMongo.register(req, res);
    }
)

router.get(
    "/media",
    (res, req, next) => {
        alunoServiceMongo.media(req, res);
    }
)

router.get(
    "/aprovados",
    (res, req, next) => {
        alunoServiceMongo.aprovados(req, res);
    }
)

router.put(
    "/atualizar/:id",
    (res, req, next) => {
        alunoServiceMongo.update(req, res);
    }
)

router.delete(
    "/remover/:id",
    (res, req, next) => {
        alunoServiceMongo.delete(req, res);
    }
)

router.get(
    "/retrive/:id",
    (res, req, next) => {
        alunoServiceMongo.retrieve(req, res);
    }
)

module.exports = router;
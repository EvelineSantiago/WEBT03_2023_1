const professorServiceMongo = require("../services/professores.service.mongo")

var express = require('express');
var router = express.Router();

router.get(
    "/listar",
    (req, res, next) => {
        professorServiceMongo.list(req, res)
    }
)

router.post(
    "/cadastrar",
    (req, res, next) => {
        professorServiceMongo.register(req, res)
    }
)

router.get(
    "/recuperar/:id",
    (req, res, next) => {
        professorServiceMongo.retrieve(req, res)
    }
)

router.put(
    "/atualizar/:id",
    (req, res, next) => {
        professorServiceMongo.update(req, res)
    }
)

router.delete(
    "/remover/:id",
    (req, res, next) => {
        professorServiceMongo.delete(req, res)
    }
)

module.exports = router
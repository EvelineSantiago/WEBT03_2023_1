const AlunoModel = require('../models/aluno.model.mongo');

class alunoService {
    static list(req, res) {
        AlunoModel.find()
        .then((alunos) => {
            res.status(201).json(alunos);
        })       
    }

    static register(req, res) {
        AlunoModel.find()
        .then((alunos) => {
            res.status(201).json(alunos);
        })
    }

    static media(req, res) {
        AlunoModel.find()
        .then((alunos) => {
            let aux = 0;
            alunos.map((aluno) => {
                aux += aluno.ira
            })
            aux = aux/alunos.length
            res.status(201).json(aux)
        })
    }

    static aprovados(req, res) {
        AlunoModel.find()
        .then((alunos) => {
            let aux = 0;
            alunos.map((aluno) => {
                if(aluno.ira >= 7) {
                    aux++;
                }
            })
            aux = aux/alunos.length
            res.status(201).json(alunos.filter(a => a.ira >= aux))
        })
    }

    static retrieve(req, res) {
        AlunoModel.findById(req.params.id)
        .then((aluno) => {
            res.status(201).json(aluno);
        })
    }

    static update(req, res) {
        AlunoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((aluno) => {
            res.status(201).json(aluno);
        })
    }

    static delete(req, res) {
        AlunoModel.findByIdAndRemove(req.params.id)
        .then((aluno) => {
            res.status(201).json(aluno);
        }
    )}
}

module.exports = alunoService;
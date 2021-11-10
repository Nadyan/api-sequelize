const database = require('../models');

class PessoaController {

    static async selecionaTudo(req, res) {
        try {
            const todasPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasPessoas);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async selecionaPessoa(req, res) {
        const { id } = req.params;
        try {
            const dados = await database.Pessoas.findOne(
                { 
                    where: { 
                        id: Number(id)
                    }
                }
            );
            return res.status(200).json(dados);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async criaPessoa(req, res) {
        const dados = req.body;

        try {
            const { id } = await database.Pessoas.create(dados);
            return res.status(200).json(id);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;

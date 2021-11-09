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
}

module.exports = PessoaController;

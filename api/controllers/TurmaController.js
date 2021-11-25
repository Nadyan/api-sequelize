const database = require('../models');

class TurmaController {

    static async selecionaTudo(req, res) {
        try {
            const todasTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasTurmas);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async selecionaTurma(req, res) {
        const { id } = req.params;
        try {
            const dados = await database.Turmas.findOne(
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

    static async criaTurma(req, res) {
        const dados = req.body;

        try {
            const { id } = await database.Turmas.create(dados);
            return res.status(200).json(id);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async editaTurma(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            const where = { 
                where: { 
                    id: Number(id)
                }
            }
            await database.Turmas.update(dados, where);
            // update() retorna apenas 0 ou 1, entao fazemos um
            // findOne para retornar a pessoa atualizada
            const turmaAtualizada = await database.Turmas.findOne(where);

            return res.status(200).json(turmaAtualizada);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async deletaTurma(req, res) {
        const { id } = req.params;

        try {
            const retorno = await database.Turmas.destroy(
                {
                    where: {
                        id: Number(id)
                    }
                }
            );
            
            return res.status(200).json({
                mensagem: `${retorno} - id ${id} deletado com sucesso`
            });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

}

module.exports = TurmaController;
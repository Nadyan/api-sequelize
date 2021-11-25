const database = require('../models');

class NivelController {

    static async selecionaTudo(req, res) {
        try {
            const todosNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosNiveis);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async selecionaNivel(req, res) {
        const { id } = req.params;
        try {
            const dados = await database.Niveis.findOne(
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

    static async criaNivel(req, res) {
        const dados = req.body;

        try {
            const { id } = await database.Niveis.create(dados);
            return res.status(200).json(id);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async editaNivel(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            const where = { 
                where: { 
                    id: Number(id)
                }
            }
            await database.Niveis.update(dados, where);
            // update() retorna apenas 0 ou 1, entao fazemos um
            // findOne para retornar o nivel atualizado
            const nivelAtualizado = await database.Niveis.findOne(where);

            return res.status(200).json(nivelAtualizado);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async deletaNivel(req, res) {
        const { id } = req.params;

        try {
            const retorno = await database.Niveis.destroy(
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

module.exports = NivelController;

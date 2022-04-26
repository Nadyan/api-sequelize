const database = require('../models');
const Sequelize = require('sequelize');

const Services = require('../services/Services');
const pessoasServices = new Services('Pessoas');

class PessoaController {

    static async selecionaTudo(req, res) {
        try {
            const todasPessoas = await database.Pessoas.findAll();
            // OU utilizando serviços:
            // const todasPessoas = await pessoasServices.pegaTodosOsRegistros();
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

    static async editaPessoa(req, res) {
        const { id } = req.params;
        const dados = req.body;

        try {
            const where = { 
                where: { 
                    id: Number(id)
                }
            }
            await database.Pessoas.update(dados, where);
            // update() retorna apenas 0 ou 1, entao fazemos um
            // findOne para retornar a pessoa atualizada
            const pessoaAtualizada = await database.Pessoas.findOne(where);

            return res.status(200).json(pessoaAtualizada);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params;

        try {
            const retorno = await database.Pessoas.destroy(
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

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const matricula = await database.Matriculas.findOne(
                {
                    where: {
                        id: Number(matriculaId),
                        estudante_id: Number(estudanteId)
                    }
                }
            )

            return res.status(200).json(matricula);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const dadosMatricula = { ...req.body, estudanteId: Number(estudanteId) };

        try {
            const novaMatricula = await database.Matriculas.create(dadosMatricula);
            return res.status(200).json(novaMatricula);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async editaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const dados = req.body;

        try {
            const where = { 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            }
            await database.Matriculas.update(dados, where);
            // update() retorna apenas 0 ou 1, entao fazemos um
            // findOne para retornar a matricula atualizada
            const matriculaAtualizada = await database.Matriculas.findOne(where);

            return res.status(200).json(matriculaAtualizada);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async deletaMatricula(req, res) {
        const { matriculaId } = req.params;

        try {
            const retorno = await database.Matriculas.destroy(
                {
                    where: {
                        id: Number(matriculaId)
                    }
                }
            );
            
            return res.status(200).json({
                mensagem: `${retorno} - id ${matriculaId} deletada com sucesso`
            });
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async desativaPessoa(req, res) {
        const { estudanteId } = req.params;
        
        try {

            database.sequelize.transaction(async transacao => {
                await database.Pessoas.update(
                    {ativo: false},
                    {where: {estudante_id: Number(estudanteId)}},
                    {transaction: transacao}
                );
    
                await database.Matriculas.update(
                    {status: 'cancelado'},
                    {where: {estudante_id: Number(estudanteId)}},
                    {transaction: transacao}
                );
            });

            return res.status(200)
                .json(
                    {
                        message: `Matrículas ref. ao estudante ${estudanteId} canceladas`
                    }
                );
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;

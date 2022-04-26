const database = require('../models');

// Métodos comuns entre os modelos podem ser
// abstraídos em um serviço na qual é utilizado
// por todos os controllers:

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll();
    }

    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne(
            { 
                where: { 
                    id: Number(id)
                }
            }
        )
    }

    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados);
    }

    async deletaRegistro(id) {
        const ret =  database[this.nomeDoModelo].destroy(
            {
                where: {
                    id: Number(id)
                }
            }
        );

        return res.status(200).json({
            mensagem: `${retorno} - id ${id} deletado com sucesso`
        });
    }

    async atualizaRegistro(id, dados) {
        const where = { 
            where: { 
                id: Number(id)
            }
        }
        await database[this.nomeDoModelo].update(dados, where);
        // update() retorna apenas 0 ou 1, entao fazemos um
        // findOne para retornar o registro atualizada
        return registroAtualizado = await database[this.nomeDoModelo].findOne(where);
    }
}

module.exports = Services;
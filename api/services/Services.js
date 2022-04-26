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
        //
    }

    async criaRegistro(dados) {
        //
    }

    async deletaRegistro(id) {
        //
    }

    async atualizaRegistro(id, dados) {
        //
    }
}
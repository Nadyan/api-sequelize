'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definição de chaves estrangeiras
      // hasMany -> Um para Muitos (Um.hasMany(Muitos))
      // belongsTo -> Um para Um
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      });
    }
  };
  Pessoas.init({
    nome: { // validacao customizada pelo banco do tipo de dado nome
      tupe: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length < 2) throw new Error('Campo nome deve ter ao menos 2 caracteres');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: { // validação pelo banco do tipo de dado email
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dado do tipo email inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};
const Sequelize = require('sequelize');
const database = require('./dbConfig');

const Dev = database.define('Dev', {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    tecnologias: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nivel: {
      type: Sequelize.ENUM('junior', 'pleno', 'senior'),
      allowNull: false,
    },
    salario: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  },
  {
    Sequelize,
    modelName: 'Dev',
    tableName: 'devs',
    timestamps: true,
  })

module.exports = Dev;

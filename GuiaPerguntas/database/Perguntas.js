const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("tb_perguntas", {
    titulo: {
        type: Sequelize.STRING,
        size: 35,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        size: 255,
        allowNull: false
    }
});

Pergunta.sync({force: false});

module.exports = Pergunta;
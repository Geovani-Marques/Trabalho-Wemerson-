const express = require("express");

const sequelize = require("./config/database");

require("./models");

const autorRoutes = require("./routes/autorRoutes");
const livroRoutes = require("./routes/livroRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");

const app = express();

app.use(express.json());

app.use(autorRoutes);
app.use(livroRoutes);
app.use(categoriaRoutes);

async function iniciarBanco() {
    try {
        await sequelize.sync();
        console.log("Banco de dados sincronizado!");
    } catch (erro) {
        console.error("Erro ao sincronizar o banco:", erro);
        process.exitCode = 1;
        throw erro;
    }
}

module.exports = {
    app,
    iniciarBanco
};
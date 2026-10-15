const Autor = require("./Autor");
const Livro = require("./Livro");
const Categoria = require("./Categoria");

// Autor 1:N Livro
Autor.hasMany(Livro, {
    foreignKey: "autorId"
});

Livro.belongsTo(Autor, {
    foreignKey: "autorId"
});

// Livro N:N Categoria
Livro.belongsToMany(Categoria, {
    through: "livro_categorias"
});

Categoria.belongsToMany(Livro, {
    through: "livro_categorias"
});

module.exports = {
    Autor,
    Livro,
    Categoria
};
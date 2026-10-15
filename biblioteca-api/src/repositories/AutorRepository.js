const { Autor } = require("../models");

class AutorRepository {

    async criar(dados) {
        return await Autor.create(dados);
    }

    async listarTodos() {
        return await Autor.findAll();
    }

    async buscarPorId(id) {
        return await Autor.findByPk(id);
    }

    async atualizar(id, dados) {
        const autor = await Autor.findByPk(id);

        if (!autor) {
            return null;
        }

        await autor.update(dados);
        return autor;
    }

    async excluir(id) {
        const autor = await Autor.findByPk(id);

        if (!autor) {
            return null;
        }

        await autor.destroy();
        return autor;
    }
}

module.exports = new AutorRepository();
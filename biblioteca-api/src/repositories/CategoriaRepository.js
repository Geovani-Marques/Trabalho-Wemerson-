const { Categoria } = require("../models");

class CategoriaRepository {
    async criar(dados) {
        return await Categoria.create(dados);
    }

    async listarTodos() {
        return await Categoria.findAll();
    }

    async buscarPorId(id) {
        return await Categoria.findByPk(id);
    }

    async atualizar(id, dados) {
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return null;
        }

        await categoria.update(dados);

        return categoria;
    }

    async excluir(id) {
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return null;
        }

        await categoria.destroy();

        return categoria;
    }
}

module.exports = new CategoriaRepository();
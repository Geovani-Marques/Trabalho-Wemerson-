const categoriaRepository = require("../repositories/CategoriaRepository");

class CategoriaService {
    async criar(dados) {
        return await categoriaRepository.criar(dados);
    }

    async listarTodos() {
        return await categoriaRepository.listarTodos();
    }

    async buscarPorId(id) {
        const categoria = await categoriaRepository.buscarPorId(id);

        if (!categoria) {
            throw new Error("Categoria não encontrada");
        }

        return categoria;
    }

    async atualizar(id, dados) {
        const categoria = await categoriaRepository.atualizar(id, dados);

        if (!categoria) {
            throw new Error("Categoria não encontrada");
        }

        return categoria;
    }

    async excluir(id) {
        const categoria = await categoriaRepository.excluir(id);

        if (!categoria) {
            throw new Error("Categoria não encontrada");
        }

        return categoria;
    }
}

module.exports = new CategoriaService();
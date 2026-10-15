const autorRepository = require("../repositories/AutorRepository");

class AutorService {

    async criar(dados) {
        return await autorRepository.criar(dados);
    }

    async listarTodos() {
        return await autorRepository.listarTodos();
    }

    async buscarPorId(id) {
        const autor = await autorRepository.buscarPorId(id);

        if (!autor) {
            throw new Error("Autor não encontrado");
        }

        return autor;
    }

    async atualizar(id, dados) {
        const autor = await autorRepository.atualizar(id, dados);

        if (!autor) {
            throw new Error("Autor não encontrado");
        }

        return autor;
    }

    async excluir(id) {
        const autor = await autorRepository.excluir(id);

        if (!autor) {
            throw new Error("Autor não encontrado");
        }

        return autor;
    }
}

module.exports = new AutorService();
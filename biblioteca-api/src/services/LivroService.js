
const livroRepository = require("../repositories/LivroRepository");

class LivroService {
    async criar(dados) {
        return await livroRepository.criar(dados);
    }

    async listarTodos(filtros = {}) {
        const filtrosTratados = {};

        if (filtros.titulo) {
            filtrosTratados.titulo = filtros.titulo;
        }

        if (filtros.ano !== undefined && filtros.ano !== "") {
            const ano = Number(filtros.ano);

            if (!Number.isInteger(ano)) {
                throw new Error("O ano deve ser um número inteiro");
            }

            filtrosTratados.ano = ano;
        }

        if (filtros.disponivel !== undefined) {
            if (
                filtros.disponivel !== "true" &&
                filtros.disponivel !== "false"
            ) {
                throw new Error(
                    "O filtro disponivel deve ser true ou false"
                );
            }

            filtrosTratados.disponivel =
                filtros.disponivel === "true";
        }

        const pagina = filtros.page === undefined
            ? 1
            : Number(filtros.page);

        const limite = filtros.limit === undefined
            ? 10
            : Number(filtros.limit);

        if (!Number.isInteger(pagina) || pagina < 1) {
            throw new Error("page deve ser um inteiro maior que zero");
        }

        if (!Number.isInteger(limite) || limite < 1 || limite > 100) {
            throw new Error("limit deve ser um inteiro entre 1 e 100");
        }

        return await livroRepository.listarTodos(
            filtrosTratados,
            pagina,
            limite
        );
    }

    async buscarPorId(id) {
        const livro = await livroRepository.buscarPorId(id);

        if (!livro) {
            throw new Error("Livro não encontrado");
        }

        return livro;
    }

    async atualizar(id, dados) {
        const livro = await livroRepository.atualizar(id, dados);

        if (!livro) {
            throw new Error("Livro não encontrado");
        }

        return livro;
    }

    async excluir(id) {
        const livro = await livroRepository.excluir(id);

        if (!livro) {
            throw new Error("Livro não encontrado");
        }

        return livro;
    }

    async adicionarCategoria(livroId, categoriaId) {
        const livro = await livroRepository.adicionarCategoria(
            livroId,
            categoriaId
        );

        if (!livro) {
            throw new Error("Livro ou categoria não encontrado");
        }

        return livro;
    }
}

module.exports = new LivroService();

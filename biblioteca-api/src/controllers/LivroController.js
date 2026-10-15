
const livroService = require("../services/LivroService");

class LivroController {
    async criar(req, res) {
        try {
            const livro = await livroService.criar(req.body);
            return res.status(201).json(livro);
        } catch (erro) {
            if (
                erro.name === "SequelizeUniqueConstraintError" ||
                erro.name === "SequelizeValidationError"
            ) {
                const mensagem = erro.errors?.[0]?.message || erro.message;

                if (
                    erro.name === "SequelizeUniqueConstraintError" ||
                    mensagem.toLowerCase().includes("isbn")
                ) {
                    return res.status(400).json({
                        erro: "ISBN já cadastrado ou inválido"
                    });
                }

                return res.status(400).json({ erro: mensagem });
            }

            return res.status(400).json({ erro: erro.message });
        }
    }

    async listarTodos(req, res) {
        try {
            const livros = await livroService.listarTodos(req.query);
            return res.status(200).json(livros);
        } catch (erro) {
            return res.status(400).json({ erro: erro.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const livro = await livroService.buscarPorId(req.params.id);
            return res.status(200).json(livro);
        } catch (erro) {
            return res.status(404).json({ erro: erro.message });
        }
    }

    async atualizar(req, res) {
        try {
            const livro = await livroService.atualizar(
                req.params.id,
                req.body
            );

            return res.status(200).json(livro);
        } catch (erro) {
            if (
                erro.name === "SequelizeValidationError" ||
                erro.name === "SequelizeUniqueConstraintError"
            ) {
                return res.status(400).json({
                    erro: erro.errors?.[0]?.message || erro.message
                });
            }

            return res.status(404).json({ erro: erro.message });
        }
    }

    async excluir(req, res) {
        try {
            await livroService.excluir(req.params.id);
            return res.status(204).send();
        } catch (erro) {
            return res.status(404).json({ erro: erro.message });
        }
    }

    async adicionarCategoria(req, res) {
        try {
            const livro = await livroService.adicionarCategoria(
                req.params.id,
                req.body.categoriaId
            );

            return res.status(200).json(livro);
        } catch (erro) {
            return res.status(404).json({ erro: erro.message });
        }
    }
}

module.exports = new LivroController();
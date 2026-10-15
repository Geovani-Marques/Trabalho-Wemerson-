
const categoriaService = require("../services/CategoriaService");

class CategoriaController {
    async criar(req, res) {
        try {
            const categoria = await categoriaService.criar(req.body);

            return res.status(201).json(categoria);
        } catch (erro) {
            if (
                erro.name === "SequelizeValidationError" ||
                erro.name === "SequelizeUniqueConstraintError"
            ) {
                return res.status(400).json({
                    erro: erro.errors?.[0]?.message || erro.message
                });
            }

            return res.status(400).json({
                erro: erro.message
            });
        }
    }

    async listarTodos(req, res) {
        try {
            const categorias = await categoriaService.listarTodos();

            return res.status(200).json(categorias);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const categoria = await categoriaService.buscarPorId(req.params.id);

            return res.status(200).json(categoria);
        } catch (erro) {
            return res.status(404).json({
                erro: erro.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            const categoria = await categoriaService.atualizar(
                req.params.id,
                req.body
            );

            return res.status(200).json(categoria);
        } catch (erro) {
            if (
                erro.name === "SequelizeValidationError" ||
                erro.name === "SequelizeUniqueConstraintError"
            ) {
                return res.status(400).json({
                    erro: erro.errors?.[0]?.message || erro.message
                });
            }

            return res.status(404).json({
                erro: erro.message
            });
        }
    }

    async excluir(req, res) {
        try {
            await categoriaService.excluir(req.params.id);

            return res.status(204).send();
        } catch (erro) {
            return res.status(404).json({
                erro: erro.message
            });
        }
    }
}

module.exports = new CategoriaController();

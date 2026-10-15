
const autorService = require("../services/AutorService");

class AutorController {
    async criar(req, res) {
        try {
            const autor = await autorService.criar(req.body);

            return res.status(201).json(autor);
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
            const autores = await autorService.listarTodos();

            return res.status(200).json(autores);
        } catch (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }
    }

    async buscarPorId(req, res) {
        try {
            const autor = await autorService.buscarPorId(req.params.id);

            return res.status(200).json(autor);
        } catch (erro) {
            return res.status(404).json({
                erro: erro.message
            });
        }
    }

    async atualizar(req, res) {
        try {
            const autor = await autorService.atualizar(
                req.params.id,
                req.body
            );

            return res.status(200).json(autor);
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
            await autorService.excluir(req.params.id);

            return res.status(204).send();
        } catch (erro) {
            return res.status(404).json({
                erro: erro.message
            });
        }
    }
}

module.exports = new AutorController();

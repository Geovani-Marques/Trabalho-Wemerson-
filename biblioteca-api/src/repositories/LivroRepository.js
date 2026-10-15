
const { Livro, Autor, Categoria } = require("../models");
const { Op } = require("sequelize");

class LivroRepository {
    async criar(dados) {
        return await Livro.create(dados);
    }

    async listarTodos(filtros = {}, pagina = 1, limite = 10) {
        const where = {};

        if (filtros.titulo) {
            where.titulo = {
                [Op.like]: `%${filtros.titulo}%`
            };
        }

        if (filtros.ano !== undefined && filtros.ano !== "") {
            where.ano = filtros.ano;
        }

        if (filtros.disponivel !== undefined) {
            where.disponivel = filtros.disponivel;
        }

        const offset = (pagina - 1) * limite;

        const resultado = await Livro.findAndCountAll({
            where,
            include: [
                {
                    model: Autor
                },
                {
                    model: Categoria
                }
            ],
            distinct: true,
            limit: limite,
            offset
        });

        return {
            data: resultado.rows,
            pagination: {
                page: pagina,
                limit: limite,
                total: resultado.count,
                totalPages: Math.ceil(resultado.count / limite)
            }
        };
    }

    async buscarPorId(id) {
        return await Livro.findByPk(id, {
            include: [
                {
                    model: Autor
                },
                {
                    model: Categoria
                }
            ]
        });
    }

    async atualizar(id, dados) {
        const livro = await Livro.findByPk(id);

        if (!livro) {
            return null;
        }

        await livro.update(dados);

        return await Livro.findByPk(id, {
            include: [
                {
                    model: Autor
                },
                {
                    model: Categoria
                }
            ]
        });
    }

    async excluir(id) {
        const livro = await Livro.findByPk(id);

        if (!livro) {
            return null;
        }

        await livro.destroy();

        return livro;
    }

    async adicionarCategoria(livroId, categoriaId) {
        const livro = await Livro.findByPk(livroId);
        const categoria = await Categoria.findByPk(categoriaId);

        if (!livro || !categoria) {
            return null;
        }

        await livro.addCategoria(categoria);

        return await Livro.findByPk(livroId, {
            include: [
                {
                    model: Autor
                },
                {
                    model: Categoria
                }
            ]
        });
    }
}

module.exports = new LivroRepository();

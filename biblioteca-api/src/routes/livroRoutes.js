const express = require("express");
const livroController = require("../controllers/LivroController");

const router = express.Router();

router.post("/livros", livroController.criar);
router.get("/livros", livroController.listarTodos);
router.get("/livros/:id", livroController.buscarPorId);
router.put("/livros/:id", livroController.atualizar);
router.delete("/livros/:id", livroController.excluir);

router.post(
    "/livros/:id/categorias",
    livroController.adicionarCategoria
);

module.exports = router;
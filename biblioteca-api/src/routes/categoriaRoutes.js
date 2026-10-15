const express = require("express");
const categoriaController = require("../controllers/CategoriaController");

const router = express.Router();

router.post("/categorias", categoriaController.criar);
router.get("/categorias", categoriaController.listarTodos);
router.get("/categorias/:id", categoriaController.buscarPorId);
router.put("/categorias/:id", categoriaController.atualizar);
router.delete("/categorias/:id", categoriaController.excluir);

module.exports = router;
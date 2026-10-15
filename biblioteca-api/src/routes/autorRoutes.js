const express = require("express");
const autorController = require("../controllers/AutorController");

const router = express.Router();

router.post("/autores", autorController.criar);
router.get("/autores", autorController.listarTodos);
router.get("/autores/:id", autorController.buscarPorId);
router.put("/autores/:id", autorController.atualizar);
router.delete("/autores/:id", autorController.excluir);

module.exports = router;
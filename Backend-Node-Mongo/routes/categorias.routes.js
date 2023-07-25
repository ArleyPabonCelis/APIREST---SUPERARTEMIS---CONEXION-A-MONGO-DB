// 1. Importar el express // 
import express from "express";

// 2. Varible del express donde guardo y llamo las rutas//
const router = express.Router();

// 3. Importar el controlador para obtener categorias -> obtenerCategorias //
// 6. Importo y anexo el controlador para agregar o crear una nueva categoria -> agregarCategoria //
// 8. Importo y anexo el controlador para eliminar una nueva categoria -> borrarCategoria //
// 10. Importo y anexo el controlador para actualizar una categoria -> actualizarCategoria //
import { obtenerCategorias, agregarCategoria, borrarCategoria, actualizarCategoria } from "../controllers/categoria.controllers.js";

// 4. Defino la ruta get -> Metodo http
router.get("/all", obtenerCategorias);

// 7. Defino la ruta post -> Metodo http
router.post("/add", agregarCategoria);

// 9. Defino la ruta delete -> Metodo http
router.delete("/del/:id", borrarCategoria);

// 11. Defino la ruta patch (actualizar) -> Metodo http
router.patch("/upd/:id", actualizarCategoria);

// 5. Exportar el router
export default router;

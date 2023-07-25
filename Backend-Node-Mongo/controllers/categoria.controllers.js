// 1. Importar Categoria //
import Categoria from "../models/Categorias.js";


// 2. Metodos Crud - funcion para obtener las categorias //
const obtenerCategorias = async (req, res) => {

    const categorias = await Categoria.find();

    res.json(categorias);
}

// 4. Funcion para agregar categorias //
const agregarCategoria = async (req, res) => {
    // 4.1. Instanciar la clase Categoria
    const categoria = new Categoria(req.body);

    // 4.2. Realizacion del try-catch
    try {
        const nuevaCategoria = await categoria.save();

        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
}

// 6. Funcion para borrar categorias //
const borrarCategoria = async (req, res) => {
    // 6.1. Realizacion del try-catch
    try {
        await Categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404)
        res.send({error:"Categoria no existe"})
    }
}

// 8. Funcion para actualizar categoria //
const actualizarCategoria = async (req, res) => {
    // 8.1. Realizacion del try-cathc
    try {
        const categoria = await Categoria.findOne({_id:req.params.id});

        // 8.1.1. Validaciones 
        if(req.body.imagen){
            categoria.imagen = req.body.imagen
        }

        if(req.body.nombre){
            categoria.nombre = req.body.nombre
        }

        if(req.body.descripcion){
            categoria.descripcion = req.body.descripcion
        }

        await categoria.save();
        res.send(categoria);
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"})
    }
}

// 3. Exportar los metodos crud, ya que son varios, se exportan en un objeto, en este caso obtenerCategorias//
// 5. Exportar agregarCategoria //
// 7. Exportar borrarCategoria //
// 9. Exportar actualizarCategoria //
export {obtenerCategorias, agregarCategoria, borrarCategoria, actualizarCategoria};
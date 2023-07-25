// 1. Importar Mongoose //
import mongoose from "mongoose";

// 2. Definir nuestro esquema -> Estructura organizacional de los datos, se compilar y nos genera el modelo //
const categoriaSchema = mongoose.Schema(
    {
    // 2.1. Ponemos las llaves (columnas) de categorias no con valores planos sino como objetos -> Colección categorias //
        imagen : {
            type : String,
            require : true,
            trim : true, /* trim : true -> elimina los espacion en blanco */
        },
        nombre : {
            type : String,
            require : true,
            trim : true 
        },
        descripcion : {
            type : String,
            require : true,
            trim : true
        }
    },

    // 2.2. Agregar los TIMES TABS -> Registra automaticamente la fecha de creado y la fecha de actualizado //
    {
        timestamps: true,
    }
); 


// 3. Creación de un modelo para llevar las operaciones Crud.
/* monogoose.Model(p1, p2) -> "p1" -> nombre del modelo ; "p2" -> En que esquema queda ese modelo*/
const Categoria = mongoose.model("Categoria", categoriaSchema);


// 4. Exportar Categoria  //
export default Categoria;


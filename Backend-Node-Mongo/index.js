// 1. Importación del express //
import express from "express";

// 4. Importación del dotenv //
import dotenv from "dotenv";

// 8. Importar la conexion a la base de datos de config //
import conectarDB from "./config/config.js";

// 10. Importar el router //
import categoriasRouter from "./routes/categorias.routes.js";

// 2. Asignacion de una constante al express, esa constante queda con todo el poder de express //
const app = express();

// 12. Aplicación parseando a json para que me lea los datos que quiero agregar //
app.use(express.json());

// 5. Escaneo de las variables de entorno //
dotenv.config();

// 6. Llamamiento de la variable de entorno PORT //
const PORT = process.env.PORT

// 9. Ejecutar la conexion a la base de datos //
conectarDB();

// 3. Podemos a escuchar a la constante de express //
/* Con app vamos a poner a escuchar cualquies request que un cliente le haga para que basándose en esa request el servidor web proporcione una response según lo que el cliente este pidiendo  */
/* app.listen(5000, () => {
    console.log(`Server web listenning on port 5000`);
} ); */ /* Se comento para diferenciar cuando llamamos el puerto normal, codigo duro (punto 3), de cuando referenciamos el puerto gracias a las variables de entorno */

// 7. Podemos a escuchar a la constante de express pero ahora referenciando a PORT //
app.listen(PORT, () => {
    console.log(`Super Mega Server web listenning on port ${PORT}`);
} );

// 11. Utilizamos la variable de express para llamar a "use"
app.use("/categoria", categoriasRouter);


// 1. Impotar a Mongoose //
import mongoose from "mongoose";


// 2. Arrow Function para conectarnos a la base de datos //
// NOTA: Mongoose no solamente nos ayuda a conectarnos a la base de datos sino tambien nos ayuda con la estructura de los esquemas y al compilarlos gestionando nuestros modelos para modelar las colecciones de la base de datos de mongoDB.
const conectarDB = async () => {
    try {
        // Conexion
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // Verificacion de la conexion
        const url = `CONECTADO A MONGODB EN SERVER: ${connectionDB.connection.host} - EN PUERTO: ${connectionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
};


// 3. Exportar la Arrow Function conectarDB
export default conectarDB;
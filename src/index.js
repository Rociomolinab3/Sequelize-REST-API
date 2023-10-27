import app from './app.js'
import { sequelize } from './database/database.js'
// import './models/Project.js'
// import './models/Task.js'

async function main(){
try {
//    await sequelize.authenticate();
   await sequelize.sync({force:false});
   console.log("Conexión establecida") ;
   app.listen(3000);
   console.log("Servidor escuchando en puerto 3000")
} catch (error) {
     console.error("No se pudo establecer la conexión")
}
}

main();

// app.listen(300)
// console.log("server is listening on port 3000")
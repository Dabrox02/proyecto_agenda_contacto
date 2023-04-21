import mysql from 'mysql';

// ***** CREAR CONEXION *****
const conector = mysql.createConnection({
  host: 'localhost',
  user: 'dabrox',
  password: '123456',
  database: 'agenda_contacto',
})

const conectar = ()=>{
  conector.connect(err=>{
    if (err) throw err;
    console.log(`conectado`);
    return;
  });
}

export { conectar };
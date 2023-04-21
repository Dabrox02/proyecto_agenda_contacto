import mysql from 'mysql2';

// ***** CREAR CONEXION *****
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dabrox',
  password: '123456',
  database: 'agenda_contacto',
})

export { connection };
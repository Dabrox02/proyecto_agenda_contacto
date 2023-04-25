import mysql from 'mysql2';

// ***** CREAR CONEXION *****
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dabrox',
  password: '123456',
  database: 'agenda_contacto',
})


const agregarContacto = async (data)=>{
	const { name, tel } = data;

	const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES(${null}, "${name}", ${tel})`;
	console.log(sql);

	connection.query(sql, (err, res)=>{
		if (err) throw err;
		console.log(res);
	});

	connection.end();
}

export { connection, agregarContacto };
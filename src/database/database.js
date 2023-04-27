import mysql from "mysql2/promise";
import config from "./../config.js";

// ***** CREAR CONEXION *****
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

const getConnection = () => {
  return connection;
};

const agregarContacto = async (data) => {
  const { name, tel } = data;
  const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES(${null}, "${name}", ${tel})`;

  // ?????
};

export { getConnection };

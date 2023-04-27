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

export { getConnection };

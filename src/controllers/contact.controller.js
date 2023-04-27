import { getConnection } from "./../database/database.js";

const getContact = async () => {
  try {
    const connection = await getConnection();
    const [result, rows] = await connection.query("SELECT * FROM agenda");
    return result;
  } catch (error) {
    throw new Error("Ha ocurrido un error en la consulta");
  }
};

const addContact = async (data) => {
  try {
    const { name, tel } = data;
    const sql = `INSERT INTO agenda (id_agenda, nombre_contacto, numero_contacto) VALUES (
			${null},
			"${name}",
			"${tel}");`;
    const connection = await getConnection();
    const result = await connection.query(sql);
    return result;
  } catch (error) {
    throw new Error("Ha ocurrido un error en la consulta");
  }
};

const delContact = async (id) => {
  try {
    const sql = `DELETE FROM agenda WHERE agenda.id_agenda = ${id}`;
    const connection = await getConnection();
    const result = await connection.query(sql);
    return result;
  } catch (error) {
    throw new Error("Ha ocurrido un error en la consulta");
  }
};

export const methods = {
  getContact,
  addContact,
  delContact,
};

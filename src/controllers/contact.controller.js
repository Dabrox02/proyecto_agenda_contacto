import { getConnection } from "./../database/database.js";

const getContact = async (req, res) => {
  try {
    const connection = await getConnection();
    const [result, rows] = await connection.query("SELECT * FROM agenda");
    return result;
  } catch (error) {
    throw new Error("Ha ocurrido un error en la consulta");
  }
};

export const methods = {
  getContact,
};

const d = document;
const $nombre = d.querySelector("#nombre");
const $numero = d.querySelector("#numero");
const $btnAgregar = d.querySelector("#btn_agregar");
const $btnsBorrar = d.querySelectorAll(".borrar");
const regexNum = /^[0-9]{0,12}$/;

const checkBlanks = (data) => {
  for (const propiedad in data) {
    if (!data[propiedad]) return false;
  }
  return true;
};

d.addEventListener("click", async (e) => {
  if (e.target.matches("#btn_agregar")) {
    const data = {
      name: $nombre.value,
      tel: $numero.value.toUpperCase(),
    };

    if (!checkBlanks(data)) return;
    if (!regexNum.test(data["tel"])) return;

    try {
      const resPost = await axios({
        method: "POST",
        url: "/insert",
        data: data,
      });
    } catch (error) {
      console.log(`Ocurrio un error: ${error}`);
    }
  }

  if (e.target.matches(".delete")) {
    let id = e.target.getAttribute("id");

    try {
      const resPost = await axios({
        method: "DELETE",
        url: `/borrar/${id}`,
      });
    } catch (error) {
      console.log(`Ocurrio un error: ${error}`);
    }
  }
});



const d = document;
const $nombre = d.querySelector('#nombre');
const $numero = d.querySelector('#numero');
const $btnAgregar = d.querySelector('#btn_agregar');

const checkBlanks = (data)=>{
	for (const propiedad in data) {
		if(!data[propiedad]) return false;
	}
	return true;
}


d.addEventListener('click', async (e)=>{
  if(e.target.matches('#btn_agregar')){
		const data = {
			name: $nombre.value,
			tel: $numero.value
		};

		if(!checkBlanks(data)) return;

		console.log(data);
		try {
			const resPost = await axios({
				method: 'POST',
				url:'/insert',
				data: data
			});

			// console.log(resPost);
		} catch (error) {
			console.log(error);
		}
  }
});
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { connection, agregarContacto } from './src/mysql_conector.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ****** SERVER SETTINGS *******
app.set('port', 3000);
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ****** ARCHIVOS ESTATICOS ******
app.use(express.static('./views'));
app.use(express.static('./css'));
app.use(express.static('./src'));


app.get('/', async (req, res)=>{

	// **** CONEXION DE PRUEBA *****
  // connection.connect(err=>{
  //   if (err) throw err;
  //   console.log(`conectado`);
  //   return;
  // });
  res.render('index', {title: "Agenda Contacto"}); 
});

app.post('/insert', (req, res)=>{
	const contacto = req.body;
	try {
		agregarContacto(contacto);
	} catch (error) {
		console.log(error);
	}
	res.redirect('/');
});

app.listen(app.get('port'), (e)=>{
  console.log("Aplicacion Iniciada Puerto 3000");
});
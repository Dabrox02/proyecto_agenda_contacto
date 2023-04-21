import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connection } from './src/mysql_conector.js';
import axios from 'axios';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ****** SERVER SETTINGS *******
app.set('port', 3000);
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// ****** ARCHIVOS ESTATICOS ******
app.use(express.static('./views'));
app.use(express.static('./css'));
app.use(express.static('./src'));


app.get('/', async (req, res)=>{

  // connection.connect(err=>{
  //   if (err) throw err;
  //   console.log(`conectado`);
  //   return;
  // });

  res.render('index', {titulo: "Titulo Pagina"}); 
});

app.listen(app.get('port'), (e)=>{
  console.log("Aplicacion Iniciada Puerto 3000");
});
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// ***** ROUTES
import contactRoutes from "./routes/contacts.routes.js";
const app = express();

// **** VARIABLES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// **** SETTINGS
app.set("port", 4000);
app.set("views", "./../views");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// **** MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));

// ****** ARCHIVOS ESTATICOS ******
// ??? EXPRESS YA RECONOCE VIEWS PARA RENDERIZAR app.use(express.static("./../views"));
app.use(express.static("public")); // CON ESTO YA NO ES NECESARIO ESPECIFICAR LA CARPETA PUBLICA

// ROUTES
app.use(contactRoutes);

export default app;

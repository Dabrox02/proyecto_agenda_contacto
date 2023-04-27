// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
// import { connection, agregarContacto } from "./mysql_conector.js";
// import flash from "connect-flash";
// import session from "express-session";

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ****** SERVER SETTINGS *******
// app.set("port", 3000);
// app.set("views", "./views");
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(
//   session({
//     secret: "app-run-full",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(flash());

// // ****** ARCHIVOS ESTATICOS ******
// app.use(express.static("./views"));
// app.use(express.static("./css"));
// app.use(express.static("./src"));

// app.get("/", async (req, res) => {
//   res.render("index", { title: "Agenda Contacto" });
// });

// app.post("/insert", async (req, res) => {
//   const contacto = req.body;

//   res.redirect("/");
// });

// app.listen(app.get("port"), (e) => {
//   console.log("Aplicacion Iniciada Puerto 3000");
// });

import app from "./app.js";

const main = () => {
  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
};

main();

// index.js estructura principal de una aplicación express

/**
* Modulos externos requeridos
*/

const express = require("express");
const path = require("path");

/**
* Variables a usar
*/

const app = express();
const port = process.env.PORT || "5000";

/**
* Configuracion del app
*/



/**
* Definicion de rutas en la URL
*/

app.get("/", (req, res) => {
  res.status(200).send("Hello from tecmicroservices");
});

/**
* Activación del servidor
*/

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

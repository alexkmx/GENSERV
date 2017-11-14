const express = require('express');
const fs = require('fs-extra');

const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');

const app = express();  //Inicializo la aplicacion

const PATH = `${__dirname}/src/views/index.html`;   //Declaro la ruta

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);

app.use((req, res) => {
  res.send('<div style="width: 40%; margin: 0 auto;"><h1 style="color:red; font-size: 55px; margin-top: 200px;"> 404: NOT FOUND.</h1> <hr/></div>')
});


const PORT = process.env.PORT || 3000;  //Le asigno el puerto de escucha

app.listen(PORT, () => {                //Con esto creo el .JSON

console.log(`App lisening on port ${PORT}`)

});

const express = require('express');
const fs = require('fs-extra');

const app = express();  //Inicializo la aplicacion

const PATH = `${__dirname}/src/views/index.html`;   //Declaro la ruta


app.use('/', (req, res) => {
fs
 .readFile(PATH, 'utf-8')
 .then(data => {
  res.send(data);         //Aqui express me forma todo el template HTML

})
})

const PORT = process.env.PORT || 3000;  //Le asigno el puerto de escucha

app.listen(PORT, () => {                //Con esto creo el .JSON

console.log(`App lisening on port ${PORT}`)

});

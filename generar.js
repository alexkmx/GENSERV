const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');
const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');
const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');
const {Model} = require('objection');


const app = express();  //Inicializo la aplicacion

const appDb = connectToDb(dbConfigObj.development);  //le paso el obj de config

  Model.knex(appDb);
  app.locals.db = appDb;

const PATH = `${__dirname}/src/views/index.html`;   //Declaro la ruta

app.engine('ejs', ejs.renderFile);
app.set('view engine','ejs');
app.set('views', `${__dirname}/src/views`);

app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter);
app.use('/api/', apiRouter);

// app.use((req, res) => {
//   res.send('<div style="width: 40%; margin: 0 auto;"><h1 style="color:red; font-size: 55px; margin-top: 200px;"> 404: NOT FOUND.</h1> <hr/></div>')
// });

app.use((req,res) => {
  res.render('404.ejs')
})

const PORT = process.env.PORT || 3000;  //Le asigno el puerto de escucha

app.listen(PORT, () => {                //Con esto creo el .JSON

console.log(`App lisening on port ${PORT}`)

});

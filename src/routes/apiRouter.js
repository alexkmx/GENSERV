const Router = require('express').Router;

const apiRouter = Router();

function getJobs (req, res) {
   const db = req.app.locals.db;

   db
    .select()
    .table('jobs')
    .then(data => res.json(data));
}

function getCompanies(req, res) {
  const{db} = req.app.locals;

  db
   .select()
   .table('companies')
   .then(data => res.json(data));
}

apiRouter
  .get('/jobs', getJobs)
  .get('/companies', getCompanies)


module.exports = apiRouter;

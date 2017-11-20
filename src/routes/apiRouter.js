const Router = require('express').Router;
const Jobs = require('../models/Job.js');
const Company = require('../models/Company.js');


const apiRouter = Router();

function getJobs (req, res) {

   Jobs
    .query()
    .then(data => res.json(data));
}

function getCompanies(req, res) {

  Company
   .query()
   .eager('jobs')
   .then(data => res.json(data));
}

function getJobById(req, res) {
  Jobs
  .query()
  .findById(req.params.id)  //busqueda con parámetro dinámico
  .then(Jobs => {
    res.json(Jobs).status(200);
  })
  .catch(error => {
    res.send(error).status(500);
  });
}

function createJobs (req, res) {
  Jobs
  .query()
  .insert(req.body)
  .then(newJob => {
    return json (newJob).status(200);
  })
  .catch(error => {
    return res.send(error).status(500);
  });
}

function updateJob(req, res) {
  Jobs
  .query()
  .updateAndFetchById(req.params.id, req.body)
  .then(jobUpdated => {
    return res.json(jobUpdated).status(200);
  })
  .catch(error => {
    return res.send(error).status(500);
  })
}

function deleteJobById(req, res) {
  Jobs
  .query()
  .deleteById(req.params.id)
  .then(jobDeleted => {
    return res.json({
      rowsDeleted: jobDeleted
    });
  })
  .catch(error => {
    return res.send(error).status(500);
  })
}

function getCompanyById(req, res) {
  Company
  .query()
  .findById(req.params.id)  //busqueda con parámetro dinámico
  .then(Company => {
    res.json(Company).status(200);
  })
  .catch(error => {
    res.send(error).status(500);
  });
}

function createCompany (req, res) {
  Company
  .query()
  .insert(req.body)
  .then(newCompany => {
    return json (newCompany).status(200);
  })
  .catch(error => {
    return res.send(error).status(500);
  });
}

function updateCompany(req, res) {
  Company
  .query()
  .updateAndFetchById(req.params.id, req.body)
  .then(companyUpdated => {
    return res.json(companyUpdated).status(200);
  })
  .catch(error => {
    return res.send(error).status(500);
  })
}

function deleteCompanyById(req, res) {
  Company
  .query()
  .deleteById(req.params.id)
  .then(companyDeleted => {
    return res.json({
      rowsDeleted: companyDeleted
    });
  })
  .catch(error => {
    return res.send(error).status(500);
  })
}

apiRouter
  .get('/jobs', getJobs)
  .get('/companies', getCompanies)

apiRouter

  .get('/jobs/:id', getJobById)
  .post('/jobs', createJobs)
  .put('/jobs/:id', updateJob)
  .delete('/jobs/:id', deleteJobById)
  .get('/companies/:id', getCompanyById)
  .post('/companies', createCompany)
  .put('/companies/:id', updateCompany)
  .delete('/companies/:id', deleteCompanyById);

module.exports = apiRouter;

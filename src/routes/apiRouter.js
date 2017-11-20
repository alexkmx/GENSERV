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

apiRouter
  .get('/jobs', getJobs)
  .get('/companies', getCompanies)


module.exports = apiRouter;

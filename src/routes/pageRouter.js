const Router = require('express').Router;
const fs = require('fs-extra');

// Init router
const pageRouter = Router();

// Create routes
pageRouter
  .get('/', (req, res) => {
    res.send('<h1>Home</h1>');
  });

module.exports = pageRouter;

const Router = require('express').Router;

const apiRouter = Router();

apiRouter
  .get('/', (req, res) => {
    res.json([{
      "Id": 4556709,
      "name": "Antonio",
      "lastname": "Tomas",
        "Telefono": 976598823,
          "estado": "Zaragoza",
          "pais": "España",
          "ubicacón": "41°38'53.5N 0°51'48.3W",
          "url": "http://www.antoniotomas.com/9",
          "e-mail": "info@antoniotomas.com",
          "verified": true

    }])
  })

module.exports = apiRouter;

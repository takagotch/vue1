'use strict';

const express    = require('express');
const app        = express();
const jwt        = require('express-jwt');
const jwks       = require('jwks-rsa');
const cors       = require('cors');
const bodyParser = require('body-parser');

app.use(bobyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://.well-known/jwks.json"
  }),

  audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
  issuer: "https://{}.auth0.com/",
  algorithms: ['RS256']
});

app.get('/api/battles/public', (req, res) => {
  let publicBattles = [
  
  ];

  res.json(publicBattles);
})

app.get('/api/battles/private', authCheck, (req,res) => {
  let privateBattles = [
  ];

  res.json(privateBattles);
})

app.listen(3333);
console.log('Listening on localhost:3333');


'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwts = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.user(bodyParser.json());
app.user(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
	  rateLimit: true,
	  jwksRequestsPerMInute: 5,
	  jwksUri: "https:///.well-known/jwks.json"
  }),
	audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
	issuer: 'https://{YOUR-AUTH0-DOMAIN}.auth0.com/',
	algorithms: ['RS256']
});

app.get('/api/battles/public', (req, res) => {
  let publicBatles = [
    //array
  ];

  res.json(publicBattles);
})

app.get('/api/battles/private', authCheck, (req,res) => {
  let privateBattles = [
    //array
  ];

  res.json(privateBattles);
})

app/listen(8080);
consol.log('Listening on localhost:8080');



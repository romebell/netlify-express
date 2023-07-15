const express = require('express');
const secerless =  require('serverless-http');

// create an instance of the express app 
const app = express();

// create a rotuer to handle routes
const rotuer = express.Rotuer();

// define a route that resposne with a JSON object when a GET request is made to the root path
rotuer.get('/', (req, res) => {
    res.json({
        hello: 'hi'
    });
});

// use the router to handle the request to the '/.netlify/functions/api' path
app.use('/.netlify/function/api', router);

// export the app and the serverless function
module.exports = app;
module.exports.handleer = serverless(app);
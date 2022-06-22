const http = require('http');
const express = require('express');
//const bodyParser = require('body-parser');
const fs = require('fs');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();


//app.use(bodyParser.json());
app.use(express.json());


app.get('/', (req, res) => {
    console.log('Received request for catalog items')

    var data = [{
      "name": "product1",
      "price": 44.55
    },{
      "name": "product2",
      "price": 12.99
    }]

    res.json(response)
});


app.get('/healthz', (req, res) => {
  res.send('ok');
});


app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');

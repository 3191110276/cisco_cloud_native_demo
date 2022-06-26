const http = require('http');
const express = require('express');
const fs = require('fs');


// Constants
const PORT = 80;
const HOST = '0.0.0.0';


// App
const app = express();
app.use(express.json());


// Catalog Route
app.get('/', (req, res) => {

    console.log('Received request for catalog items')

    var data = [{
      "id": 1,
      "name": "product1",
      "price": 44.55
    },{
      "id": 2,
      "name": "product2",
      "price": 12.99
    }]

    res.json(response)
});


// Health Check
app.get('/healthz', (req, res) => {
  res.send('ok');
});


// Start Server
app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');

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

    const options = {
      hostname: 'google.com',
      port: 80,
      path: '/',
      method: 'GET'
    };

    const out_req = http.request(options, out_res => {
      console.log(`statusCode: ${out_res.statusCode}`);

      out_res.on('data', d => {
        process.stdout.write(d);
      });
    });

    var data = [{
      "id": 1,
      "name": "product1",
      "price": 44.55
    },{
      "id": 2,
      "name": "product2",
      "price": 12.99
    }]

    res.json(data)
});


// Health Check
app.get('/healthz', (req, res) => {
  res.send('ok');
});


// Start Server
app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');

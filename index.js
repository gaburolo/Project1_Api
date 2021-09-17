const express = require('express');
const connectDB = require('./DB/connection');
const Song = require('./api/songs');
//const https = require('https')
//const cors = require('cors')
const app = express();


app.use(express.json());
//
app.use(express.json());

app.use('/api', Song);

const port = process.env.port || 8080;
app.listen(port, () =>console.log('Esperando en '+port+'...'));
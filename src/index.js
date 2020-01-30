const express = require('express');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.end('Hello this is Teach & Rate !');
})


app.listen(port, hostname);
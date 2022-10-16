const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send("Welcome")

});

app.get('/admin', (req, res) => {

    res.send("Welcome admin")

});

app.listen(3001);
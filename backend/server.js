const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001

const app = express();

app.use('/',require('./routes/profile'))

app.listen(port);
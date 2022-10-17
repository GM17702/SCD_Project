const express = require('express');
const colors = require('colors');
const connectDB = require('./db/db')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001

connectDB();

const app = express();

app.use('/',require('./routes/profile'))

app.listen(port);
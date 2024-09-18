// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');


const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) =>{
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`sever started at http://localhost:${port}`)
})

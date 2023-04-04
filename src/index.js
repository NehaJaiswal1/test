const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');
const multer = require("multer");
// const route = require('./route/route.js');

app.use(express.json())
//comment added

app.use(cors())

app.use(multer().any())


mongoose.connect("mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/FSOC", {
    useNewurlParser: true
})
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log(err))

// app.use('/',route)

app.post('/test-me', function(req, res){
    console.log('SERVER is running ok');
    res.send('SERVER is running ok');
});

app.listen(3000)


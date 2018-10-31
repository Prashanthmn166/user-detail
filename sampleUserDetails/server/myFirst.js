/*const express = require('express')
const app=express();
const server=require('http').createServer(app);
var cors = require('cors');
const mongoose = require('mongoose');

//mangoose.connect
// const db = mongoose.createConnection('mongodb://127.0.0.1:27017/userDetailsss', { useNewUrlParser: true });
mongoose.connect('mongodb://127.0.0.1:27017/userDetails', { useNewUrlParser: true });


// node dependencies - bodyparser, path
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use(bodyParser.json());




const appFile=require('./router/app');
app.post('/myPost', appFile.adduser);
app.post('/selectUser',appFile.selectUser);








const port= process.env.PORT || 3000;
server.listen(port, () => console.info(`App running on port ${port}`));  
// server.listen(port, ()=>console.info('connected port is ${port}' ));*/


const express = require('express');
// var multer = require('multer');
const app = express();
var cors = require('cors');
const server = require('http').createServer(app);
const jwt = require('jsonwebtoken');

//node dependencies - mangoose
const mongoose = require('mongoose');


// define port
const port = process.env.PORT || 3000;


//mangoose.connect
mongoose.connect('mongodb://127.0.0.1:27017/userDetails', { useNewUrlParser: true });


// node dependencies - bodyparser, path
const bodyParser = require('body-parser');
const path = require('path');
const appFile=require('./router/app');



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.post('/selectUser',appFile.selectUser);

server.listen(port, () => console.info(`App running on port ${port}`));


 


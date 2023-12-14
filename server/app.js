const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
dotenv.config();
mongoose.connect(process.env.MONGO_URI);


const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false, limit: 100000, parameterLimit: 20}))

app.use(session({secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true,}));

app.route('/').get((req, res) =>{
    res.send("Welcome");
});
app.route('/docs').get((req, res) =>{
    // Import your mongoose model
}).post((req, res) =>{
    // Used for creating docs
    // const {id} = req.body;
    // var doc = new Model({id: id});
    // doc.save();
}).put((req, res) =>{
    // Used for updating docs
    // const {id, name} = req.body;
    // var doc = Model.findOneAndUpdate({id: id}, {$set: {name: name}}, {new: true});
});

app.listen(process.env.PORT);
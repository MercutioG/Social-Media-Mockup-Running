const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const userRoute = require('./routes/user');
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const passportSetup = require('./config/passport')

passportSetup(passport);


const app = express();

app.use(cors({
	credentials: true, origin: 'http://localhost:3000'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false, limit: 100000, parameterLimit: 20 }))

app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true, }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/users', userRoute)

app.route('/').get((req, res) => {
	res.send("Backend is working");
});
app.route('/docs').get((req, res) => {
	// Import your mongoose model
}).post((req, res) => {
}).put((req, res) => {

});

app.listen(process.env.PORT || 5000, console.log(`Server listening on port ${process.env.PORT || 5000}`));
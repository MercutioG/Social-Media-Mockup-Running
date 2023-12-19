const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user");
// const fs = require("fs")

// Register handle.
router.post("/register", (req, res) => {
	const { username, email, password } = req.body;
	let errors = [];
	if (!username || !email || !password) {
		errors.push("Please fill in all fields");
	}

	// Checks if password is less than six characters
	if (errors.length > 0) {
		console.log(errors)
		res.redirect('/register')
	} else {
		// validation passed
		User.findOne({ email: email }).then((user, err) => {
			if (user) {
				console.log('if')
				errors.push({ msg: "email already registered" });
				console.log(errors)
			} else {
				console.log('else')
				const newUser = new User({
					username: username,
					email: email,
					password: password,
				});
				// Hash password
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						// Save hash to pass
						newUser.password = hash;
						// Save user
						newUser
							.save() // This is a mongoose function to save to our mongodb
							.catch((value) => console.log(`Something went wrong after saving: ${value}`));
					});
				});
			}
		});
	}
});

// Login
router.get('/login', (req, res, next) => {})

router.post("/login", (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
		// failureFlash: true,
	})(req, res, next);
	// req, res, next is returned down here
});

// Logout
router.get("/logout", (req, res) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
	});
	res.redirect("/");
});

module.exports = router;
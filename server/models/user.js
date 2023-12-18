const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			maxLength: 20,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 10,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Users" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
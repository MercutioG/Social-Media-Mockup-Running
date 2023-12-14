const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
      minLength: 1,
      maxLength: 50,
		},
		author: {
			type: String,
		},
		blogid: {
			type: Number,
		},
		description: {
      type: String,
      default: "",
			maxLength: 255,
		},
		image: {
      type: String,
			default: "none",
		},
    date: {
      type: Number,
      default: Date.now,
    },
	},
	{ collection: "Blogs" }
);

const Blog = mongoose.model("Blog", UserSchema);

module.exports = Blog;
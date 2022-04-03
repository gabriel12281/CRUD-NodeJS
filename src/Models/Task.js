import { Schema, model } from "mongoose";

const Task = new Schema({
	title:{
		type: String,
		required:true
	},
	description:{
		type: String,
		required:true
	}
});

export default model("Task", Task);
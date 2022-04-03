import Task from "../Models/Task";

exports.index = async (req, res) => {
	const tasks = await Task.find().lean();

	res.render("index", {tasks});
};

exports.indexForm =  async (req, res) => {
	const { title, description } = req.body;

	if (title.trim() === '' || description.trim() === '') {
		res.redirect("/");
	}else{
		const task = Task(req.body);
		const taskSaved = await task.save();
		res.redirect("/")
	}
}

exports.edit = async (req, res) => {
	const task = await Task.findById(req.params.id);
	
	res.render("editar", {task});
}

exports.editForm = async (req, res) => {
	const id = await Task.findById(req.params.id);

	const { title, description } = req.body;

	if (title.trim() === '' || description.trim() === '') {
		res.redirect("/");
	}else{
		await Task.findByIdAndUpdate(id, req.body)
		res.redirect("/")
	}

}

exports.delete = async (req, res) => {
	const id = await Task.findById(req.params.id);

	await Task.findByIdAndDelete(id);
	res.redirect("/")

}
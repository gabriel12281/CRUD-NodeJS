import { connect } from "mongoose";

const db = connect("mongodb://0.0.0.0/CRUD-NODEJS")
	.then(() => console.log("Conectado a la db"))
	.catch(e => console.log(e));

export default db;
import { Int32 } from "mongodb";
import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String},
    idade: {type: Number}

},{versionKey: false})


const autor = mongoose.model("autores", autorSchema);

export {autor, autorSchema}
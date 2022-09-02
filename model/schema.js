//import express from "express"
import mongoose from "mongoose";

//Defining structure of documents
const studentSchema = new mongoose.Schema({
    name:{type : String, require : true, trim: true},
    age:{type : Number, require : true, min:18, max:70},
    fees:{type : mongoose.Decimal128, require:true, validate: (value)=>value>5000.5},
    Date:{type:Date,default:Date.now }
}); 
 
// Create model or collection

const studentModel = mongoose.model("student",studentSchema);

export default studentModel;


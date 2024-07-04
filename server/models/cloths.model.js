const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothSchema = new Schema({
    img : {type:String, required:true},
    title : {type:String, required:true},
    price : {type:Number, require:true},
    description : {type:String, require:true},
    userId : {type:String, require:true},
    createdOn : {type:Date, default: new Date().getTime()}

});

module.exports = mongoose.model("cloth",clothSchema);
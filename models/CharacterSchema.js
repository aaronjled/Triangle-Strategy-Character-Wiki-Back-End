const mongoose = require('mongoose');
const Schema = mongoose.Schema

const characterSchema = new Schema({
    image: {type: String},
    name: {type:String, unique: true, required: true},
    factionName: {type:String, required: true},
    unitClass: {type:String, required: true},
    joins: {type:String, required: true},
    bio: {type:String, required: true},
},{timestamps:true})

const Character = mongoose.model('Character', characterSchema)
module.exports = Character
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    phone:{
        type:Number,
        require:true,
    },
    travelFrom:{
        type:String,
        require:true
    },
    travelTo:{
        type:String,
        require:true
    },
    dose:{
        type:String,
        require:true
    },
    vacine:{
        type:Boolean,
        require:true
    },
    dose:{
        type:String,
    },
})

const User = new mongoose.model('User', userSchema)

module.exports = User
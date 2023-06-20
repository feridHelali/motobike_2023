const mongoose = require('mongoose')


const MotoSchema=new mongoose.Schema({
    label:{
        type:String,
        required:[true,'${PATH} is required'],
        unique:[true,'${PAHT} is unique']
    },
    description:{
        type:String,
        required:[true,'${PATH} is required'],  
    },
    photoURLS:[]
})

module.exports=mongoose.model('Moto',MotoSchema)
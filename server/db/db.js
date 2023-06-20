const mongoose = require('mongoose')
const connect = async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/motobike_db',{
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    .then(()=>{
        console.log('API connected successfully to database')
    })
    .catch(error=>console.log(error.message))
}

module.exports={
    connect
}
const Moto = require('../models/motos.model')

const addNewMoto = async(label,description)=>{
    const newMoto = await Moto.create({label,description})
    return newMoto;
}

const getAllMotos = async ()=>{
    const motos = await Moto.find({})
    return motos;
}

module.exports={
    addNewMoto,
    getAllMotos
}
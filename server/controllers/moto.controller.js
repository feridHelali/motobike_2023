const motoService = require('../services/moto.service')

const addNewMoto = async (req,res,next)=>{
    const {label,description}=req.body;
    const result = await motoService.addNewMoto(label,description)
   res.json(result)
}

const getAllMotos = async(req,res,next)=>{
  const result = await motoService.getAllMotos()
  res.json(result)
}

module.exports={
    addNewMoto,
    getAllMotos
}
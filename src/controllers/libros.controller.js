const librosController={};
const Libro=require('../models/Libro.model');
librosController.obtenerLibros=async(req,res)=>{
    const libros=await Libro.find();
    res.json(libros);

};
module.exports=librosController;
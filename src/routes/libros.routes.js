const {Router}=require('express');
const librosController=require('../controllers/libros.controller');
const router=Router();
router.get('/',librosController.obtenerLibros);
module.exports=router;
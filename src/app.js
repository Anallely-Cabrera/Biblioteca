const express=require('express');
const morgan=require('morgan');
const app=express();

//settings //configuracion
app.set('port',process.env.PORT||3500);
app.set('view engine','ejs'); //motor de vistas que utilizaremos

//Middlewares --> ruta por donde pasa primero la peticion
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev')); 
app.use(require('./routes/libros.routes'));//permite invocar a las rutas pero primero debemos crear las rutas 
module.exports=app;//exportamos los modulos para que lo use otro 
const {Schema,model}=require('mongoose');
const LibroSchema=new Schema({
    codigobarras:{
        require:true,//se solicita y lo inserta si esta
        unique:true,// si se duplicaca tampoco se inserta
        type:String
    },
    titulo:String,
    autor:String,
    paginas:String,
    descripcion:String,
    preciocompra:Number,
    precioventa:Number
},{
    versionkey:false,
    timestamps:true
});

module.exports=model('libros',LibroSchema);
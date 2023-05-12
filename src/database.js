const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ANALLELY:mk5IHVuHAjmuF9Vq@cluster0.tlhy8kp.mongodb.net/Bibloteca?retryWrites=true&w=majority')
.then(db=> console.log("Mongodb Connected"))
.catch(err=>console.error(err)); //leer una promesa en java script    
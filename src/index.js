//el dev inicializa primero el index.js
require('./database'); //referencia a la base de datos
const app=require('./app'); //referencia a los modulos de app

app.listen(app.get('port'),() => {
    console.log('server on port' + app.get('port'));
});
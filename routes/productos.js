var express = require('express');
var router = express.Router();
var db=require('../conexion/conexion');

/* GET seccion (productos.ejs). */
router.get('/', function(req, res, next) {
db.query("SELECT * FROM calzado", function(err, resultados){
     console.log(resultados);
     res.render('productos', { title: 'Productos', calzados: resultados});
 });
 
});

module.exports = router;
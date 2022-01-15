var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_ventas'
});

connection.connect((err) => {
    if (!err) { console.log("Conexión establecidad"); }
    else { console.log("Conexión fallida"); }
});

module.exports=connection;
// connection.query("SELECT * FROM calzado", function(err, resultados){
//     console.log(resultados);

// });

// connection.end();
const mysql = require('mysql2');

const db = mysql.createConnection({ 
    host: 'localhost', 
    database: 'employees',
    user: 'root', 
    password: '',
});


module.exports = db.promise();
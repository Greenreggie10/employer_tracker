const mysql = require('mysql2');
const db = mysql.createConnection({host: 'localhost', port: 3600, database: 'employeetracker', user: 'root', password: '',});



module.exports = db.promise();
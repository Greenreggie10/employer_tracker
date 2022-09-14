const connection = require('./config/connection');




module.exports = {
    viewAllEmployees(){
       return connection.query('SELECT * FROM employees');
    }
    
    };
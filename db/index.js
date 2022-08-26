const connection = require('../config/connection');



module.exports = {
    getAllEmployees(){
       return connection.query('SELECT * FROM employees');
    }

};
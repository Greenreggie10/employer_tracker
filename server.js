const inquirer = require('inquirer');
const questions = [
    { 
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [ 'view all Employees', 'Add Employee', 'Add Role', 'Update Employee Role', ' View All Departments', ' Add department']
        
    }


]
 inquirer.prompt(questions).then((employeesResponse)=>{
    console.log(employeesResponse.name);
 });
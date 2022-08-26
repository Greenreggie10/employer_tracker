const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'name',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Roles','Add Employee', 'Add Role', 'Update Employees Role', ' View All Departments', ' Add department']


    }


]
inquirer.prompt(questions).then((employeesResponse) => {
    console.log(employeesResponse.name);
    switch (employeesResponse.name) {
        case ('View All Employees'):
            return viewAllEmployees();
        case ('View All Roles'):
            return viewAllRoles();
        case ('Add Employee'):
            return addEmployee();
        case ('Add Role'):
            return addRole();
        case ('Update Employees Role'):
            return updateEmplyeesRole();
        case ('View All Departments'):
            return viewAllDepartments();
        case ('Add Department'):
            return addDepartment();
        default:
            process.exit(1);
    }
});

function viewAllEmployees(){
    
}
const inquirer = require('inquirer');
require('console.table');
const db = require('./config/connection');

const questions = [
    {
        type: 'list',
        name: 'name',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Roles', 'Add Employee', 'Add Role', 'Update Employees Role', ' View All Departments', ' Add department', 'Quit']


    }
]

function mainMenu() {
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
            case ('Quit'):
                return Goodbye();
            default:
                console.log('default')
                // process.exit(1);
        }
    });

}

//add function


async function viewAllEmployees() {
    try {
      const [ data ] = await db.query('SELECT * FROM employee');

      console.table(data);

      mainMenu();

    } catch(err) {  
        console.log(err);
    }
};
async function addEmployee () {
    try {

      const promptData = await inquirer.prompt([
        {
            type: 'text',
            name: 'first_name',
            message: "What is your employee's first name?",
        },
        {
            type: 'text',
            name: 'last_name',
            message: "What is your employee's last name?",
        },
        {
            type: 'number',
            name: 'role_id',
            message: "What is your employee's role id?",
        },
        {
            type: 'number',
            name: 'manager_id',
            message: "What is your employee's manager id?",
        }
      ]);

      const [ data ] = await db.query('INSERT INTO employee SET ?', promptData);

      console.log('\n', 'Employee Added!', '\n')

      mainMenu();

    } catch(err) {  
        console.log(err);
    }
};
async function viewAllRoles() {
    try {
      const [ data ] = await db.query('SELECT * FROM roles');

      console.table(data);

      mainMenu();

    } catch(err) {  
        console.log(err);
    }
};
async function addRole() {
    const role = {


        title:'',
        salary: 10000,
        department_id: 1,


    }
    try {
      const [ data ] = await db.query('INSERT INTO role SET ?; ', role);

      console.table(data);

      mainMenu();

    } catch(err) {  
        console.log(err);
    }
};
async function updateEmplyeesRole() {
    try {
      const [ data ] = await db.query('UPDATE employees SET role_id = ? where id = ?', [ role_id, id ]);

      console.table(data);

      mainMenu();

    } catch(err) {  
        console.log(err);
    }
};
async function addDepartment() {
   

    try {
      const department = await inquirer.prompt([{
         
        
            type: 'input',
            name: 'name',
            message: 'What is the name of department to add?',

      }]);

      const [ data ] = await db.query('INSERT INTO department SET ?;', department);

      console.table(data);

      mainMenu();

    } catch(err) {  
        console.log(err);
    }
};

mainMenu();
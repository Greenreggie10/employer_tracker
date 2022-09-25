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
            case (' View All Departments'):
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


async function Goodbye() {
    try {
        
        
        console.log('Goodbye');


    } catch (err) {
        console.log(err);
    }
};

async function viewAllDepartments() {
    try {
        
        const [data] = await db.query('SELECT * FROM department');
        
        console.table(data);

        mainMenu();

    } catch (err) {
        console.log(err);
    }
};


async function viewAllEmployees() {
    try {
        const [data] = await db.query('SELECT * FROM employee');

        console.table(data);

        mainMenu();

    } catch (err) {
        console.log(err);
    }
};
async function addEmployee() {
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

        const [data] = await db.query('INSERT INTO employee SET ?', promptData);

        console.log('\n', 'Employee Added!', '\n')

        mainMenu();

    } catch (err) {
        console.log(err);
    }
};
async function viewAllRoles() {
    try {
        const [data] = await db.query('SELECT * FROM role');

        console.table(data);

        mainMenu();

    } catch (err) {
        console.log(err);
    }
};
async function addRole() {
   const role = await inquirer.prompt([
        {
            type: 'text',
            name: 'title',
            message: "What is your new role called?",
        },
        {
            type: 'number',
            name: 'salary',
            message: "What is your desired salary?",
        },
        {
            type: 'number',
            name: 'department_id',
            message: "What is your employee's department id?",
        }

    ])
       
            console.log(role)
            try {
                const [data] = await db.query('INSERT INTO role SET ?; ', role);

                console.table(data);

                mainMenu();

            } catch (err) {
                console.log(err);

            };

        };
async function updateEmplyeesRole() {
    try {
        const [roles] = await db.query('SELECT * FROM role');
        console.log(roles);
        const roleObj = roles.map(role => {
            return { key: role.id, value: role.title }
        });
        console.log(roleObj);

        const [employees] = await db.query('SELECT * FROM employee');
        console.log(employees);
        const employeeObj = employees.map((employee) => {
            return { key: employee.id, value: `${employee.first_name} ${employee.last_name}` }
        });
        console.log(employeeObj);
        inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'What employee_id would you like to assign this employee?',
                choices: employeeObj
            },
            {
                type: 'list',
                name: 'role',
                message: 'What role_id would you like to assign this employee?',
                choices: roleObj
            }


        ]).then(answers => {
            console.log(answers);

            //add info console log 
            const [data] = db.query(('UPDATE employees SET role = ? where id = ?', [answers.role, answers.employee_id]));

            console.log(data);

        });

        mainMenu();

    } catch (error) {
        console.error(error)
    };
}
async function addDepartment() {


    try {
        const department = await inquirer.prompt([{


            type: 'input',
            name: 'name',
            message: 'What is the name of department to add?',

        }]);

        const [data] = await db.query('INSERT INTO department SET ?;', department);

        console.table(data);

        mainMenu();

    } catch (err) {
        console.log(err);
    }
};


mainMenu();

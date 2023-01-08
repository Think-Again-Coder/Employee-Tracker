// Including app dependencies
const mysql2 = require('mysql2');
const db = require('./db');
const inquirer = require('inquirer');
const cTable = require("console.table");

// const connection = mysql2.createConnection({
//     host:'localhost',
//     port: 3306,
//     password: '',
//     database: 'employeedb'
// });

function startPrompts() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'View All Roles',
            'View All Departments',
            'Add an Employee',
            'Add a Role',
            'Add a Department'
        ]
    },
        
]).then((choices) => {
    const answers = choices.start;
    //if statements start here
    if (answers === 'View All Employees') {
        viewDepartments();
    } else if (answers === 'View All Roles') {
        viewRoles();
    }
});

}
startPrompts();
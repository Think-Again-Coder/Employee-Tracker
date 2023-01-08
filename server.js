// Including app dependencies
const cTable = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require('./connection');

const PORT = process.env.PORT || 3001;

// Connect Throw Error handling
connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as ID");
    afterConnection();
});

//first function starting prompts for user.
function start() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'start here',
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
start();
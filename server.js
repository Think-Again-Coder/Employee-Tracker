// Including app dependencies
// const mysql = require('mysql');
const db = require('./db/schema.sql')
const inquirer = require('inquirer');
const cTable = require("console.table");

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    database: 'employeeDb'
});



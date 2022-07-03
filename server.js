const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,

    user: "root",


    password: "Mundi-1998",
    database: "employees"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

console.log("Welcome!")

function init() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Please select a option?",
            choices: [
                "View All of the Employees", 
                "View All of the Departments", 
                "View All of the Roles", 
                "Search for an Employee", 
                "Search for Employees by Manager", 
                "Add a Employee", 
                "Add a Department", 
                "Add a Role", 
                "exit" 
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "View All of the Employees":
                    employeeAll();
                    break;

                case "View All of the Departments":
                    deptsAll();
                    break;

                case "View All of the Roles":
                    rolesAll();
                    break;

                case "Search for an Employee":
                    employee();
                    break;

                case "Search for Employees by Manager":
                    employeeManager();
                    break;

                case "Remove a Employee":
                    deleteEmployee();
                    break;

                case "Remove a Department":
                    deleteDept();
                    break;

                case "Remove a Role":
                    deleteRole();
                    break;

                case "Add a Employee":
                    addEmployee();
                    break;

                case "Add a Department":
                    addDept();
                    break;

                case "Add a Role":
                    addRole();
                    break;


                case "Update Employee Role":
                    updateRole();
                    break;

                case "Update Employee Manager":
                    updateManager();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}

init()

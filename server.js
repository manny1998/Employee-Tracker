const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

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

                case "Add a Employee":
                    addEmployee();
                    break;

                case "Add a Department":
                    addDept();
                    break;

                case "Add a Role":
                    addRole();
                    break;

                case "exit":
                    connection.end();
                    break;
            }
        });
}


function employeeAll() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);

    });
    init();
}

function deptsAll() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    init();
}

function rolesAll() {
    var query = "SELECT * FROM employee_role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    init();
}

function addEmployee() {
    inquirer
        .prompt([{
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
        }, {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        }, {
            name: "role_id",
            type: "input",
            message: "What is the employee's role id?"
        }, {
            name: "manager_id",
            type: "input",
            message: "What is your manager's id?",

        }, ])
        .then(function(answer) {
            let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)"
            connection.query(query, [answer.firstName, answer.lastName, parseInt(answer.role_id), parseInt(answer.manager_id)], function(err, res) {
                if (err) throw err;
                console.log(res);
            })
            init();
        })
}

function addDept() {
    inquirer
        .prompt({
            name: "dept_name",
            type: "input",
            message: "What is the name of the department you want to add?"
        }, )
        .then(function(answer) {
            let query = "INSERT INTO department (dept_name) VALUES (?)";
            connection.query(query, [answer.dept_name], function(err, res) {
                if (err) throw err;
                console.table(res);
            })
            init();
        })

}

function addRole() {
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is the name of the new role title?"
        }, {
            name: "salary",
            type: "input",
            message: "What is the yearly salary of this role?"
        }, {
            name: "dept_name",
            type: "input",
            message: "What department is this new role under?"
        }])
        .then(function(answer) {
            let query = "INSERT INTO employee_role (title, salary, dept_name) VALUES (?,?,?)";
            connection.query(query, [answer.title, answer.salary, answer.dept_name], function(err, res) {
                if (err) throw err;
                console.table(res);
            })
            init();
        })

}

function employee() {
    inquirer
        .prompt([{
            name: "firstName",
            type: "input",
            message: "What is the Employee's first name?"
        }, {
            name: "lastName",
            type: "input",
            message: "What is the Employee's last name?"
        }])
        .then(function(answer) {
            var query = "SELECT * FROM employee WHERE (first_name = ?) AND (last_name = ?)";
            connection.query(query, [answer.firstName, answer.lastName], function(err, res) {
                if (err) throw err;
                console.table(res);
            });
            init();
        })
}

function employeeManager() {
    inquirer
        .prompt({
            name: "filterManager",
            type: "input",
            message: "Filter by Manager ID:"
        })
        .then(function(answer) {
            var query = "SELECT * FROM employee WHERE manager_id =?";
            connection.query(query, [parseInt(answer.filterManager)], function(err, res) {
                if (err) throw err;
                console.table(res);
            });
            init();
        })
}

init()

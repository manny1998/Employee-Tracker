INSERT INTO department (dept_name) 
VALUES ("Human Resources"),("Marketing"),("Sales"),("Regulation"),("Cleaning Staff");


INSERT INTO employee_role  (title, salary, dept_name) 
VALUES ("Human Resource Manager", 30000, "Human Resources"),("Human Resource Specialist", 25000, "HR"),("Director of Marketing", 1500000, "Marketing"),("Sales Manager", 100000, "Sales"), ("Sales consultant", 60000, "Sales"),("Regulator", 250000, "Regulation"),
("Vice Regulator", 150000, "Regulation"),("Cleaning manager", 30000, "Cleaning Staff"),("Cleaning vice manager", 25000,"Cleaning Staff");


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Steve", "Harrington", 1,3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Max", "Mayfield", 1,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Lucas", "Sinclair", 2,3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Eleven", "Hopper", 1,2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dustin", "Henderson", 3,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Hopper", 2,4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Erica", "Sinclair", 1,5);

SELECT salary, dept_name, first_name, last_name, title
FROM employee_role
INNER JOIN employee
ON employee_role.id = employee.role_id
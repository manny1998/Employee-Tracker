INSERT INTO department (dept_name) 
VALUES ("Marketing"),("Sales"),


INSERT INTO employee_role  (title, salary, dept_name) 
VALUES ("Head of Marketing", 150000, "Marketing"),("Sales Manager", 100000, "Sales"), ("Sales Representative", 50000, "Sales"),

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jane", "Smith", 1,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Eric", "Smith", 1,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 2,1);

SELECT salary, dept_name, first_name, last_name, title
FROM employee_role
INNER JOIN employee
ON employee_role.id = employee.role_id

USE employees;

INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('IT'),
    ('Administration');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Accounting Technician', 100000, 1),
    ('Accounting Manager', 150000, 1),
    ('IT Analyst', 100000, 2),
    ('IT Manager', 150000, 2),
    ('C.F.O.', 200000, 3),
    ('C.T.O.', 200000, 3),
    ('C.E.O.', 250000, 3),
    ('Intern', 60000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 7, 1),
    ('Marcos', 'Chan', 5, 1),
    ('Ashley', 'Rodriguez', 6, 1),
    ('Kevin', 'Tupik', 2, 2),
    ('Malia', 'Brown', 1, 4),
    ('Tom', 'Hall', 4, 3),
    ('Kunal', 'Slingh', 3, 6),
    ('Mike', 'Allen', 8, 6);
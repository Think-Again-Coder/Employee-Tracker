insert into Department (name)
values
('management'),
('IT'),
('Sales'),
('HR');

insert into Role (title, salary, department_id)
values
('Manager', 90000, 1),
('Software Engineer', 1000000, 2),
('Sales Person', 20, 3),
('Recruiter', 50000, 4);

insert into employee (first_name, last_name, role_id, manager_id)
values
('John', 'Lopez', 1, null),
('Steve', 'Baldwin', 2, 1),
('Jeff', 'Bezos', 3, 1);


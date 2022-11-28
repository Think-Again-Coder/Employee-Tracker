drop database if exists employeeDb;

create database employeeDb;

use employeeDb;

create table Department(
    id int auto_increment primary key,
    name varchar(30)
);

create table Role(
    id int auto_increment primary key,
    title varchar(30),
    salary decimal,
    department_id int,
    foreign key(department_id) references Department(id)
);

create table employee(
    id int auto_increment primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    foreign key(role_id) references Role(id),
    manager_id int,
    foreign key(manager_id) references employee(id)
);


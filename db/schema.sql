-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
-- Boolean does not really exist in SQL. it is replaced by TINYINT. 
-- so basically, 0 = false, and 1 = true
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
isDevoured boolean NOT NULL,
PRIMARY KEY (id)
);
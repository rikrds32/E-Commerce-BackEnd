-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE category(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE  product(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INTEGER(10) NOT NULL,
    category_id INTEGER(11),
    PRIMARY KEY(id)
);

CREATE TABLE tag(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    tag_name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE product_tag(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_id INTEGER(11),
    tag_id INTEGER(11),
    PRIMARY KEY(id)
);


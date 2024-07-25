DROP DATABASE IF EXISTS bwblog;

CREATE DATABASE bwblog;

USE bwblog;

create table user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pseudo VARCHAR(20) NOT NULL,
  email VARCHAR(50) UNIQUE,
  hashed_password VARCHAR(250) NOT NULL,
  role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table comment (
  id INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(1000) NOT NULL,
  id_user INT NOT NULL,
  id_article INT NOT NULL,
  nb_like INT DEFAULT 0,
  FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (id_article) REFERENCES article(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table article (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(250) NOT NULL,
content TEXT NOT NULL,
img_url VARCHAR(250),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_like (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_user INT NOT NULL,
  id_comment INT NOT NULL,
  UNIQUE KEY unique_user_comment (id_user, id_comment),
  FOREIGN KEY (id_user) REFERENCES user(id),
  FOREIGN KEY (id_comment) REFERENCES comment(id) ON DELETE CASCADE
);
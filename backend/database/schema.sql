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
  title VARCHAR(20) NOT NULL,
  content VARCHAR(1000) NOT NULL,
  id_user INT NOT NULL,
  id_article INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (id_article) REFERENCES article(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table article (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(250) NOT NULL,
description VARCHAR(250) NOT NULL,
content TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
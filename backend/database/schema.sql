DROP DATABASE IF EXISTS bwblog;

CREATE DATABASE bwblog;

USE bwblog;

SET FOREIGN_KEY_CHECKS = 0;

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

INSERT INTO article (title, content, img_url, created_at)
VALUES 
('Article 1', 'Contenu 1', 'uploads\1721917575024-313448064-Stripes.png', '2024-01-01 10:00:00'),
('Article 2', 'Contenu 2', 'uploads\1721917617279-331966617-Spiral.png', '2024-02-01 11:00:00'),
('Article 3', 'Contenu 3', 'uploads\1721917656357-654193120-Labyrinth.png', '2024-03-01 12:00:00'),
('Article 4', 'Contenu 4', 'uploads\1721917690926-846453210-Checkerboard.png', '2024-04-01 13:00:00'),
('Article 5', 'Contenu 5', 'uploads\1721917724772-955692475-Half.png', '2024-05-01 14:00:00'),
('Article 6', 'Contenu 6', 'uploads\1721917749270-777571668-Circle.png', '2024-06-01 15:00:00');

CREATE TABLE user_like (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_user INT NOT NULL,
  id_comment INT NOT NULL,
  UNIQUE KEY unique_user_comment (id_user, id_comment),
  FOREIGN KEY (id_user) REFERENCES user(id),
  FOREIGN KEY (id_comment) REFERENCES comment(id) ON DELETE CASCADE
);

SET FOREIGN_KEY_CHECKS = 1;
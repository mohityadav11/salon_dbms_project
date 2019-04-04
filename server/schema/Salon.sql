CREATE TABLE salon
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  location VARCHAR(100),
  contact_no VARCHAR(10),
  website_link VARCHAR(100),
  email VARCHAR(100),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id),
  PRIMARY KEY (id)
);
CREATE TABLE service
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  tag VARCHAR(20),
  brand VARCHAR(20),
  benefits VARCHAR(255),
  points_to_remember VARCHAR(255),
  recommended_for VARCHAR(255),
  cost INT,
  salon_id INT,
  FOREIGN KEY (salon_id) REFERENCES salon(id),
  PRIMARY KEY (id)
);
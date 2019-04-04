CREATE TABLE salon_time_table
(
  day VARCHAR(20),
  opening_time TIME,
  closing_time TIME,
  salon_id INT,
  FOREIGN KEY (salon_id) REFERENCES salon(id)
);
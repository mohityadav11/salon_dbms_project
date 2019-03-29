const connection = require ('../mysql/mysql_connection');

const create = (req, res) => {
  const staff = req.body;

  connection.query ('INSERT INTO staff SET ?', staff, function (
    err,
    results,
    fields
  ) {
    if (err) {
      return res.status (400).json ({
        err,
      });
    }

    res.status (200).json ({
      message: 'Staff created successfully',
    });
  });
};

const list = (req, res) => {
  const {salonId} = req.query;

  sql = `
    SELECT * FROM staff
    INNER JOIN salon
    ON salon.id = staff.salon_id
    WHERE salon.id = ?
  `;

  connection.query (sql, parseInt (salonId, 10), function (
    err,
    results,
    fields
  ) {
    if (err) {
      return console.log (err);
    }

    console.log (results);
  });
};

module.exports = {create, list};

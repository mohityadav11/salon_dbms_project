const connection = require ('../mysql/mysql_connection');

const create = (req, res) => {
  const salon_time_table = req.body;

  const sql = `
    INSERT INTO salon_time_table
    (day, opening_time, closing_time, salon_id)
    VALUES
    ?
  `;

  connection.query (sql, [salon_time_table], function (err, results, fields) {
    if (err) {
      return res.status (400).json ({
        err,
      });
    }

    res.status (200).json ({
      message: 'Time Table created successfully',
    });
  });
};

module.exports = {create};

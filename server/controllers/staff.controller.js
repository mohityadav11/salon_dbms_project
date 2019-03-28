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

module.exports = {create};

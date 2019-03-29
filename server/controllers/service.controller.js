const connection = require ('../mysql/mysql_connection');

const create = (req, res) => {
  const service = req.body;

  connection.query ('INSERT INTO service SET ?', service, function (
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
      message: 'Service created successfully',
    });
  });
};

module.exports = {create};

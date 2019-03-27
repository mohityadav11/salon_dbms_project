const connection = require ('../mysql/mysql_connection');

const create = (req, res) => {
  const salon = {
    ...req.body,
    user_id: req.auth.id,
  };

  connection.query ('INSERT INTO salon SET ?', salon, function (
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
      message: 'Salon created successfully',
    });
  });
};

const list = (req, res) => {
  if (req.query.limit) {
    const {limit} = req.query;

    connection.query (
      'SELECT * FROM salon LIMIT ?',
      parseInt (limit, 10),
      function (err, results, fields) {
        if (err) {
          return res.status (400).json ({
            err,
          });
        }

        res.status (200).json ({
          salons: results,
        });
      }
    );
  } else {
    connection.query ('SELECT * FROM salon', function (err, results, fields) {
      if (err) {
        return res.status (400).json ({
          err,
        });
      }

      res.status (200).json ({
        salons: results,
      });
    });
  }
};

module.exports = {create, list};

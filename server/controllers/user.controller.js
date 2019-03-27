const connection = require ('../mysql/mysql_connection');

const create = (req, res) => {
  const user = req.body;

  connection.query ('INSERT INTO user SET ?', user, function (
    err,
    results,
    fields
  ) {
    if (err) {
      let errorMessage = 'Unable to create user';

      if (err.code === 'ER_DUP_ENTRY') {
        errorMessage = 'Email already exists';
      }

      res.status (400).json ({
        errorMessage,
      });
    } else {
      res.status (200).json ({
        message: 'Account created successfully',
      });
    }
  });
};

module.exports = {
  create,
};

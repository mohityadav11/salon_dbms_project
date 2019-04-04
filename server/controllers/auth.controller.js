const connection = require ('../mysql/mysql_connection');
const jwt = require ('jsonwebtoken');
const config = require ('../../config/config');
const expressJwt = require ('express-jwt');

const login = (req, res) => {
  const {email, password} = req.body;

  connection.query ('SELECT * FROM user WHERE email = ?', [email], function (
    err,
    results,
    fields
  ) {
    if (err) {
      console.log (err);
    } else {
      if (results.length === 0) {
        return res.status (400).json ({
          errorMessage: 'Incorrect email!',
        });
      }

      const user = results[0];

      if (user.password !== password) {
        return res.status (400).json ({
          errorMessage: 'Incorrect password!',
        });
      }

      jwt.sign ({id: user.id}, config.JWT_SECRET, function (err, token) {
        if (err) {
          return res.status (400).json ({
            errorMessage: 'Unable to create account',
          });
        }

        res.status (200).json ({
          token,
          user,
        });
      });
    }
  });
};

const requireSignin = expressJwt ({
  secret: config.JWT_SECRET,
  requestProperty: 'auth',
});

module.exports = {
  login,
  requireSignin,
};

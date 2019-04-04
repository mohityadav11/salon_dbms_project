const connection = require ('../mysql/mysql_connection');

const create = (req, res) => {
  const {timing, user_id, salon_id, staff_id, services} = req.body;

  const appointment = {
    timing: new Date (timing),
    user_id,
    salon_id,
    staff_id,
  };

  const sql1 = `
    INSERT INTO appointment SET ?
  `;

  connection.query (sql1, appointment, function (err, results, fields) {
    if (err) {
      console.log (err);
      return res.status (400).json ({err});
    }

    const appointments = [];
    services.forEach (service => {
      appointments.push ([results.insertId, service]);
    });

    const sql2 = `
      INSERT INTO appointment_service_info
      (appointment_id, service_id)
      VALUES
      ?
    `;

    console.log (appointments);

    connection.query (sql2, [appointments], function (err, results, fields) {
      if (err) {
        return res.status (400).json ({
          err,
        });
      }

      res.status (200).json ({
        message: 'Appointment created successfully!',
      });
    });
  });
};

module.exports = {create};

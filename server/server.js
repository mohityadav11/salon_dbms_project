const express = require ('express');
const bodyParser = require ('body-parser');
require ('./mysql/mysql_connection');

const userRoutes = require ('./routes/user.route');
const authRoutes = require ('./routes/auth.route');

const app = express ();
app.use (bodyParser.json ());

app.use ('/', userRoutes);
app.use ('/', authRoutes);

app.listen (3000, () => {
  console.log ('Server started on port 3000');
});

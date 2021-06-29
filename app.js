const express = require('express');
const app = express();

//DB connection
const pool = require('./helper/db');

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

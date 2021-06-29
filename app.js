const express = require('express');
const app = express();

//DB connection
const pool = require('./helper/db');

app.use(express.json());

//routes
app.get('/', async (req, res) => {
  pool
    .query('SELECT * FROM learningpaths')
    .then((lp) => {
      res.json(lp.rows);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});

const router = require('express').Router();

//DB connection
const pool = require('../helper/db');

//read learningpaths
router.get('/', async (req, res) => {
  pool
    .query('SELECT * FROM learningpaths')
    .then((lp) => {
      res.json(lp.rows);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

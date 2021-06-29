//DB connection
const pool = require('../helper/db');

//queries
const lpQueries = require('../queries/learningPath');

exports.getLearningPaths = (req, res) => {
  pool
    .query(lpQueries.getLearningPaths)
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//DB connection
const pool = require('../helper/db');

//queries
const LearningPathQueries = require('../queries/learningPath');

exports.getLearningPaths = (req, res) => {
  pool
    .query(LearningPathQueries.getLearningPaths)
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.addLearningPath = (req, res) => {
  const { description, mip_id } = req.body;
  pool
    .query(LearningPathQueries.addLearningPath, [description, mip_id])
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.updateLearningPath = (req, res) => {
  const { lpId } = req.params;
  const { description, mip_id } = req.body;
  pool
    .query(LearningPathQueries.updateLearningPath, [lpId, description, mip_id])
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

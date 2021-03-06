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
  const { description, mipId } = req.body;
  pool
    .query(LearningPathQueries.addLearningPath, [description, mipId])
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.updateLearningPath = (req, res) => {
  const { id } = req.params;
  const { description, mipId } = req.body;
  pool
    .query(LearningPathQueries.updateLearningPath, [id, description, mipId])
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.deleteLearningPath = (req, res) => {
  const { id } = req.params;
  pool
    .query(LearningPathQueries.deleteLearningPath, [id])
    .then((lp) => {
      res.status(200).json(lp.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

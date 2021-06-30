const getLearningPaths = 'SELECT * FROM learningpaths';
const addLearningPath =
  'INSERT INTO learningpaths (description, mip_id) VALUES ($1, $2) RETURNING *';

module.exports = {
  getLearningPaths,
  addLearningPath,
};

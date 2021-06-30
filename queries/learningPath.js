const getLearningPaths = 'SELECT * FROM learningpaths';
const addLearningPath =
  'INSERT INTO learningpaths (description, mip_id) VALUES ($1, $2) RETURNING *';
const updateLearningPath =
  'UPDATE learningpaths SET description = $2, mip_id = $3 WHERE learningpath_id = $1 RETURNING *';

module.exports = {
  getLearningPaths,
  addLearningPath,
  updateLearningPath,
};

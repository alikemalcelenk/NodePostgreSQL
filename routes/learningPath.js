const router = require('express').Router();

// controllers
const LearningPathController = require('../controllers/learningPath');

router.get('/', LearningPathController.getLearningPaths);
router.post('/', LearningPathController.addLearningPath);

module.exports = router;

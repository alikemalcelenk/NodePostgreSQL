const router = require('express').Router();

// controllers
const LearningPathController = require('../controllers/learningPath');

router.get('/', LearningPathController.getLearningPaths);

module.exports = router;

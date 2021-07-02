const router = require('express').Router();

// controllers
const LearningPathController = require('../controllers/learningPath');

router.get('/', LearningPathController.getLearningPaths);
router.post('/', LearningPathController.addLearningPath);
router.put('/:id', LearningPathController.updateLearningPath);
router.delete('/:id', LearningPathController.deleteLearningPath);

module.exports = router;

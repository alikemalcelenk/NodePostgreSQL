const router = require('express').Router();

// controllers
const LearningPathController = require('../controllers/learningPath');

router.get('/', LearningPathController.getLearningPaths);
router.post('/', LearningPathController.addLearningPath);
router.put('/:lpId', LearningPathController.updateLearningPath);
router.delete('/:lpId', LearningPathController.deleteLearningPath);

module.exports = router;

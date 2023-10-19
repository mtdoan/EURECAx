const express = require('express');
const {
    registerCanvas,
    getCanvasById,
    deleteCanvas,
    updateCanvasInfo,
} = require('../controllers/canvasController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerCanvas);

router
    .route('/info')
    .put(updateCanvasInfo);

router.route('/:id')
    .get(getCanvasById)
    .delete(deleteCanvas);

module.exports = router;

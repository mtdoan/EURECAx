const express = require('express');
const { recordUsage, getUsages } = require('../controllers/usageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, recordUsage).get(protect, getUsages);

module.exports = router;

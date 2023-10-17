const asyncHandler = require('../middleware/asyncHandler');
const Usage = require('../models/usageModel');

// @desc Record usage
// @route POST /api/usages
// @access Private
const recordUsage = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const searchQuery = req.body.searchQuery;
    const usage = await Usage.findOneAndUpdate(
        {
            userId,
            searchQuery,
        },
        { usageTimestamp: Date.now() },
        { new: true, upsert: true }
    );
    if (usage) {
        res.status(200).json({});
    } else {
        res.status(500);
        throw new Error('Failed to record usage');
    }
});

// @desc Get usages
// @route GET /api/usages
// @access Private
const getUsages = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const limit = req.query.limit || 10;

    const usages = await Usage.find({ userId }, '-_id searchQuery', {
        sort: '-usageTimestamp',
        limit: limit,
    }).exec();

    res.json(usages);
});

module.exports = {
    recordUsage,
    getUsages,
};

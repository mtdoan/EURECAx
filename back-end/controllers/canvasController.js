const asyncHandler = require('../middleware/asyncHandler');
const Canvas = require('../models/canvasModel');

// @desc Register a new canvas
// @route POST /api/canvases
// @access Public
const registerCanvas = asyncHandler(async (req, res) => {
    let userid = req.body.userid;
    let eventData = req.body.eventData;
    let understandData = req.body.understandData;
    let refineData = req.body.refineData;
    let exploreData = req.body.exploreData;
    let createData = req.body.createData;
    let actionData = req.body.actionData;

    const canvas = await Canvas.create({
        userid,
        eventData,
        understandData,
        refineData,
        exploreData,
        createData,
        actionData
    });

    canvas.save;

    if (canvas) {
        res.status(201).json({
            _id: canvas._id,
            userid: canvas.userid,
            eventData: canvas.eventData,
            understandData: canvas.understandData,
            refineData: canvas.refineData,
            exploreData: canvas.exploreData,
            createData: canvas.createData,
            actionData: canvas.actionData
        });
    } else {
        res.status(400);
        throw new Error('Error when generating a canvas');
    }
});

// @desc Get canvas info
// @route GET /api/canvases/info
// @access Private
const getCanvasById = asyncHandler(async (req, res) => {
    const canvas = await Canvas.findById(req.params.id).select();

    if (canvas) {
        res.json(canvas);
    } else {
        res.status(404);
        throw new Error('Canvas not found');
    }
});

// @desc Delete canvas
// @route DELETE /api/canvases/info
// access Private
const deleteCanvas = asyncHandler(async (req, res) => {
    const canvas = await Canvas.findById(req.params.id).select();

    if (canvas) {
        await canvas.deleteOne({ _id: canvas._id });
        res.json({ message: 'Canvas deleted' });
    } else {
        res.status(404);
        throw new Error('Canvas not found');
    }
});

// @desc Update canvas info
// @route PUT /api/canvases/info
// @access Private
const updateCanvasInfo = asyncHandler(async (req, res) => {
    let log = [];
    let canvas = await Canvas.findById(req.body.canvasId);

    if (canvas) {
        canvas.user = req.body.user;
        canvas.eventData = req.body.eventData;
        canvas.understandData = req.body.understandData;
        canvas.refineData = req.body.refineData;
        canvas.exploreData = req.body.exploreData;
        canvas.createData = req.body.createData;
        canvas.actionData = req.body.actionData;

        const updatedCanvas = await canvas.save();
        log.push(updatedCanvas)
    } else {
        log.push('canvas ' + canvas._id + ' not found in system');
    }

    res.json({ log })
});

module.exports = {
    registerCanvas,
    getCanvasById,
    deleteCanvas,
    updateCanvasInfo,
};

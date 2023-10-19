const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const CanvasSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            require: true,
            default: ""
        },

        eventData: {
            type: String,
            required: false,
            unique: false,
            timestamps: true,
            default: ""
        },

        understandData: {
            type: String,
            required: false,
            unique: false,
            default: ""
        },

        refineData: {
            type: String,
            required: false,
            unique: false,
            default: ""
        },

        exploreData: {
            type: String,
            required: false,
            unique: false,
            default: ""
        },

        createData: {
            type: String,
            required: false,
            unique: false,
            default: ""
        },

        actionData: {
            type: String,
            required: false,
            unique: false,
            default: ""
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model.Canvases || mongoose.model("Canvases", CanvasSchema);
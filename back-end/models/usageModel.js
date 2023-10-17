const mongoose = require('mongoose');

const UsageSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: [true, 'Please provide a userId!'],
            unique: false,
            index: true,
        },
        searchQuery: {
            type: String,
            unique: false,
        },
        usageTimestamp: {
            type: Date,
            required: [true, 'Please provide a timestamp!'],
            unique: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Usages', UsageSchema);

const mongoose = require('mongoose');

/**
 * Mongoose schema for storing blacklisted tokens.
 * This schema ensures that each token is unique and has an expiration time of 24 hours.
 * 
 * schema blacklistTokenSchema
 * property {String} token - The blacklisted token, required and unique.
 * property {Date} createdAt - The date when the token was created, defaults to the current date and time, and expires after 24 hours.
 */
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});

const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

module.exports = BlacklistToken;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true,
        toJSON: { getters: true },
    }
);

module.exports = mongoose.model('User', userSchema, 'users');
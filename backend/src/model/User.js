// model/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },

        email: {
            type: String,
            default: null
        },

        traktUserId: {
            type: String,
            unique: true,
            required: true
        },

        avatar: {
            type: String,
            default: ""
        },

        isAuthenticated: {
            type: Boolean,
            default: false
        },

        lastSyncedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
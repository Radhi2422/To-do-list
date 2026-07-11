// model/OAuthToken.js

const mongoose = require("mongoose");

const oauthTokenSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        provider: {
            type: String,
            default: "trakt"
        },

        accessToken: {
            type: String,
            required: true
        },

        refreshToken: {
            type: String,
            required: true
        },

        tokenType: {
            type: String,
            default: "Bearer"
        },

        expiresIn: {
            type: Number,
            required: true
        },

        expiresAt: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("OAuthToken", oauthTokenSchema);
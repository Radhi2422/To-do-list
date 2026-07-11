// services/traktService.js

const axios = require("axios");

const CLIENT_ID = process.env.TRAKT_CLIENT_ID;
const CLIENT_SECRET = process.env.TRAKT_CLIENT_SECRET;
const REDIRECT_URI = process.env.TRAKT_REDIRECT_URI;

const getAccessToken = async (code) => {

    const response = await axios.post(
        "https://api.trakt.tv/oauth/token",
        {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code"
        }
    );

    return response.data;
};

const refreshAccessToken = async (refreshToken) => {

    const response = await axios.post(
        "https://api.trakt.tv/oauth/token",
        {
            refresh_token: refreshToken,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: "refresh_token"
        }
    );

    return response.data;
};

const getUserProfile = async (accessToken) => {

    const response = await axios.get(
        "https://api.trakt.tv/users/settings",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "trakt-api-version": "2",
                "trakt-api-key": CLIENT_ID
            }
        }
    );

    return response.data.user;
};

module.exports = {
    getAccessToken,
    refreshAccessToken,
    getUserProfile
};
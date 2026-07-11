// services/syncService.js

const axios = require("axios");

const CLIENT_ID = process.env.TRAKT_CLIENT_ID;

const syncLibrary = async (accessToken) => {

    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "trakt-api-version": "2",
        "trakt-api-key": CLIENT_ID
    };

    const [movies, shows, watchlist] = await Promise.all([

        axios.get(
            "https://api.trakt.tv/sync/watched/movies",
            { headers }
        ),

        axios.get(
            "https://api.trakt.tv/sync/watched/shows",
            { headers }
        ),

        axios.get(
            "https://api.trakt.tv/sync/watchlist",
            { headers }
        )

    ]);

    return {

        movies: movies.data,

        shows: shows.data,

        watchlist: watchlist.data,

        syncedAt: new Date()

    };
};

module.exports = {
    syncLibrary
};
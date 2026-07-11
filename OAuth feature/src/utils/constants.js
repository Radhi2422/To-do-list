// utils/constants.js

module.exports = {
    HTTP_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        INTERNAL_SERVER_ERROR: 500
    },

    AUTH_PROVIDER: {
        TRAKT: "trakt"
    },

    AUTH_STATUS: {
        SIGNED_IN: "Signed In",
        SIGNED_OUT: "Not Signed In"
    },

    SYNC_STATUS: {
        PENDING: "Pending",
        RUNNING: "Running",
        COMPLETED: "Completed",
        FAILED: "Failed"
    },

    TOKEN_TYPE: {
        BEARER: "Bearer"
    },

    LOG_LEVEL: {
        INFO: "INFO",
        WARN: "WARN",
        ERROR: "ERROR"
    }
};
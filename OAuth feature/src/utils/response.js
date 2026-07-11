// utils/response.js

const { HTTP_STATUS } = require("./constants");

const success = (
    res,
    message = "Success",
    data = {},
    statusCode = HTTP_STATUS.OK
) => {

    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

const error = (
    res,
    message = "Something went wrong",
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    errors = null
) => {

    return res.status(statusCode).json({
        success: false,
        message,
        errors
    });
};

module.exports = {
    success,
    error
};
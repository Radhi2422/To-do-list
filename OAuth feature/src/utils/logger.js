// utils/logger.js

const fs = require("fs");
const path = require("path");

const logDirectory = path.join(__dirname, "../logs");

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const logFile = path.join(logDirectory, "application.log");

const writeLog = (level, message) => {

    const log = `[${new Date().toISOString()}] [${level}] ${message}\n`;

    console.log(log.trim());

    fs.appendFile(logFile, log, (err) => {
        if (err) {
            console.error("Logger Error:", err.message);
        }
    });
};

module.exports = {

    info(message) {
        writeLog("INFO", message);
    },

    warn(message) {
        writeLog("WARN", message);
    },

    error(message) {
        writeLog("ERROR", message);
    }
};
// utils/encrypt.js

const crypto = require("crypto");

const ALGORITHM = "aes-256-cbc";
const SECRET_KEY = crypto
    .createHash("sha256")
    .update(process.env.ENCRYPTION_KEY || "default_secret_key")
    .digest();

const IV_LENGTH = 16;

const encrypt = (text) => {

    const iv = crypto.randomBytes(IV_LENGTH);

    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);

    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    return `${iv.toString("hex")}:${encrypted}`;
};

const decrypt = (encryptedText) => {

    const parts = encryptedText.split(":");

    const iv = Buffer.from(parts[0], "hex");

    const encrypted = parts[1];

    const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, iv);

    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
};

module.exports = {
    encrypt,
    decrypt
};
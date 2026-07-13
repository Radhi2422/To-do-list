// controller/authController.js

const authService = require("../services/authService");

const login = async (req, res) => {

    try {

        const authUrl = authService.login();

        return res.redirect(authUrl);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Unable to initiate Trakt authentication."
        });

    }

};

module.exports = {
    login
};

// GET  /auth/callback
exports.callback=async(req,res)=>{
    res.status(200).json({
        success:true,
        message: "Callback Success"
    })
}


// POST /auth/logout
exports.logout=async(req,res)=>{
    res.status(200).json({
        success:true,
        message: "logout Success"
    })
}



// GET  /auth/status
exports.status=async(req,res)=>{
    res.status(200).json({
        success:true,
        message: "status Success"
    })
}

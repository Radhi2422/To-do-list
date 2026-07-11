//authenticate

//Generate OAuth URL
//Exchange authorization code for token
//Store tokens
//Fetch user profile
//refresh expired tokens
//start synchronization


const CLIENT_ID= process.env.TRAKT_CLIENT_ID;
const REDIRECT_URI=process.env.TRAKT_REDIRECT_URI;


const login = () => {

    const params = new URLSearchParams({
        response_type: "code",
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI
    });

    return `https://trakt.tv/oauth/authorize?${params.toString()}`;
};

const authenticate = async (code) => {

    const token = await traktService.getAccessToken(code);

    const profile = await traktService.getUserProfile(token.access_token);

    return {
        token,
        profile
    };
};

module.exports = {
    login,
    authenticate
};
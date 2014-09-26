module.exports = {

    'facebookAuth' : {
        'clientID'       : process.env.FACEBOOKAUTH_CLIENT_ID,
        'clientSecret'   : process.env.FACEBOOKAUTH_CLIENT_SECRET, 
        'callbackURL'    : process.env.FACEBOOKAUTH_CALLBACK_URL
    },

    'twitterAuth' : {
        'consumerKey'    : process.env.TWITTERAUTH_CONSUMER_KEY,
        'consumerSecret' : process.env.TWITTERAUTH_CONSUMER_SECRET,
        'callbackURL'    : process.env.TWITTERAUTH_CALLBACK_URL
    },

    'googleAuth' : {
        'clientID'       : process.env.GOOGLEAUTH_CLIENT_ID,
        'clientSecret'   : process.env.GOOGLEAUTH_CLIENT_SECRET,
        'callbackURL'    : process.env.GOOGLEAUTH_CALLBACK_URL
    },

    'githubAuth' : {
        'clientID'       : process.env.GITHUBAUTH_CLIENT_ID,
        'clientSecret'   : process.env.GITHUBAUTH_CLIENT_SECRET,
        'callbackURL'    : process.env.GITHUBAUTH_CALLBACK_URL
    }

};
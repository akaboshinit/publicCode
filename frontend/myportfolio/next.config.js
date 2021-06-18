// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    assetPrefix: process.env.GITHUB_PAGES ? '/myportfolio' : '',
    'process.env.GOOGLE_ANALYTICS_ID' : 'UA-174249701-1'
}

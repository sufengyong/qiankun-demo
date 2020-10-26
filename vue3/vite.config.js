const cors = require('@koa/cors');

module.exports = {
    configureServer ({ app }) {
        app.use(cors({ origin: '*'}));
    }
}
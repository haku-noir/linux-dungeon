const domain = require('express-domain-middleware');

app.use(domain);

// exception handlers
app.use(function(err, req, res, next) {
    logger.error.fatal(err);
});
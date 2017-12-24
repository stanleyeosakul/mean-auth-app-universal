module.exports.serverRouter = (req, res, next) => {
    // Exception handling for API calls
    if (req.url.startsWith('/users')) return next();

    // Server-side rendering
    res.render('index', { req, res });
}
module.exports = function home(app, options) {
  var router = express.Router();

  // SPA Routes
  var spaRoutes = [
    '/summary',
    '/activity',
    '/visits',
    '/physicans',
    '/patients',
    '/complaints',
    '/diagnoses',
    '/medications',
    '/'
  ];

  router.get(spaRoutes, function(req, res, next) {
    if(!req.accepts('html')) { return next(); }

    return res.render('index', options);
  });

  app.use('/', router);
};

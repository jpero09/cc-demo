module.exports = function(app) {
  require('./api')(app);
  require('./home')(app);
};

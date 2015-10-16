var ControllerRef = require('../../controllers/mockDept');

module.exports = function(app) {
  var router = express.Router();
  var controller = new ControllerRef();

  router
    .get('/:id', function(req, res) { controller.getById(req, res); });

  app.use('/api/dept', router);
};

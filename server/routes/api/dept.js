var ControllerRef = require('../../controllers/mockDept');

module.exports = function(app) {
  var router = express.Router();
  var controller = new ControllerRef();

  router
    .get('/:id', function(req, res) { controller.getById(req, res); })
    .get('/:id/summary', function(req, res) { controller.getSummary(req, res); })
    .get('/:id/activity', function(req, res) { controller.getActivity(req, res); })
    .get('/:id/physicians', function(req, res) { controller.getPhysicians(req, res); })
  ;

  app.use('/api/dept', router);
};

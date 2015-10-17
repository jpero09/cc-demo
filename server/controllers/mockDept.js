var _ = require('lodash');

var MockDeptController = function() { };

MockDeptController.prototype.getById = function(req, res) {
  var output = {
    id: req.params.id,
    label: 'Cardiology and Cardiac Surgery',
    building: 'Oxford General Medical Center - Main',
    location: {
      longitude: 40.11064,
      latitude: -83.1514
    },
    address: {
      street: '7500 Hospital Dr',
      city: 'Dublin',
      state: 'OH',
      zip: '43016'
    },
    physicians: 75,
    complaints: 10412,
    diagnosis: 11109,
    visits: 14123
  };

  res.json(output);
};

MockDeptController.prototype.getSummary = function(req, res) {
  var output = {
    id: req.params.id,
    insurance: {
      providers: [
        {label: 'Insurance', coverage: 98},
        {label: 'Insurance', coverage: 75},
        {label: 'Insurance', coverage: 70},
        {label: 'Insurance', coverage: 20},
        {label: 'Insurance', coverage: 18}
      ]
    },
    visits: {
      total: 14123,
      monthly: [
        ['Month', 'Visits'],
        ['Jan',  50],
        ['Feb',  60],
        ['Mar',  70],
        ['Apr',  52],
        ['May',  60],
        ['Jun',  52],
        ['Jul',  75],
        ['Aug',  78],
        ['Sep',  53],
        ['Oct',  70],
        ['Nov',  67],
        ['Dec',  64]
      ]
    }
  };

  res.json(output);
};

module.exports = MockDeptController;

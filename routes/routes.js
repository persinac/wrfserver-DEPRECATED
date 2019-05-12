'use strict';
module.exports = function(app) {
  var sample = require('../controller/sample-controller');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /***
   * Sample endpoints
   */
  app.route('/sample/:player').post(sample.getSampleByName);
  app.route('/sample/new/:player&:reporter').post(sample.createSample);
  app.route('/sample/list').get(sample.getAllSamples);
};
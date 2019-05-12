var Sample = require('../model/sample-model.js');

exports.getAllSamples = function(req, res) {
  Sample.getSamples(function(err, sample) {
    if (err)
      res.send(err);
    res.send(sample);
  });
};

exports.createSample = function(req, res) {
  var new_sample = new Sample({player: req.params.player, reporter: req.params.reporter});
  if(!new_sample || !new_sample){
    res.status(400).send({ error:true, message: 'Please provide name' });
  }
  else{
    Sample.createSampleModel(new_sample, function(err, sample) {
      if (err)
        res.send(err);
      res.json(sample);
    });
  }
};

exports.getSampleByName = function(req, res) {
  Sample.getSampleModelByName(req.params.player, function(err, sample) {
    if (err)
      res.send(err);
    res.json(sample);
  });
};

/* functions below this are unused as of 01/14/19 */
exports.updateSampleById = function(req, res) {
  Sample.updateById(req.params.sampleId, function(err, sample) {
    if (err)
      res.send(err);
    res.json(sample);
  });
};


exports.deleteSample = function(req, res) {
  Sample.remove(req.params.sampleId, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Sample has been successfully deleted' });
  });
};
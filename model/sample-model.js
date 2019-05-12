var sql = require('./db.js');

//Sample object constructor
var SampleModel = function(sample){
  console.log(sample);
  this.player = sample.player;
  this.reporter = sample.reporter;
  this.reported_on = new Date();
};
SampleModel.createSampleModel = function createSampleModel(newSample, result) {
  sql.query("INSERT INTO test set ?", newSample, function (err, res) {
    if(err) {
      console.log("error: ", err);
      console.log("stuff");
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
SampleModel.getSampleModelByName = function getByName(name, result) {
  sql.query("Select * from test where test_column = ?", [name], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);

    }
  });
};
SampleModel.getSamples = function getAll(result) {
  sql.query("Select * from test", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('samples : ', res);
      result(null, res);
    }
  });
};
SampleModel.updateById = function(id, result){
  sql.query("UPDATE test SET test_column = 'UPDATED' WHERE id = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};
SampleModel.remove = function(id, result){
  sql.query("DELETE FROM test WHERE id = ?", [id], function (err, res) {

    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports=SampleModel;
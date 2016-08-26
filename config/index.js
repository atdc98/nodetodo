var configValues = require('./config');

module.exports = {

  getDbConnectionString: function(db_type) {
    switch (db_type) {
      case "mongo":
        var db_string =  'mongodb://' + configValues.username + ':' + configValues.password + '@ds147985.mlab.com:47985/nodetodo';
      break;
      default:
        var db_string = "";
    }
    return db_string;
  }

}
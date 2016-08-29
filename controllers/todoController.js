var Todos = require('../models/todoModel').Todos;
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.json()); // ??
  app.use(bodyParser.urlencoded({extended: true })); // ??

  app.get('*', function(req, res) {

    //res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '../public/views/index.html'));

  });

}
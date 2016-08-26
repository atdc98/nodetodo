var Todos = require('../models/todoModel').Todos;

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {
    // seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'learn node',
        isDone: false,
        hasAttachment: false
      }
    ];

    if (Todos.count() < 1) {
      Todos.create(starterTodos, function(err, results) {
        if (err) {
          throw err;
        }
        res.send(results);
      });
    }
    else {
      res.end("Seeded data not necessary.");
    }
  });

}
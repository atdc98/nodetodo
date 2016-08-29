todoApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.location = "MAIN";
}]);

todoApp.controller('todosCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.location = "MY TODOS";

  var getTodos = function () {
    $http.get('/api/todos/test')
    .success(function(data) {
      $scope.myTodos = data;
    })
    .error(function(err) {
      console.log(err);
    });
  }

  $scope.newTodo = "";
  $scope.addTodo = function() {
    var todo = {
      username: "test",
      todo: $scope.newTodo,
      isDone: false,
      hasAttachment: false
    };
    $http.post('/api/todo', todo)
      .success(function(data) {
        getTodos();
      })
      .error(function(err) {
        console.log(err);
      });
  };
  
  $scope.toggleStrikethrough = function(todo) {
    if (todo.isDone === false) {
      todo.isDone = true;
    }
    else {
      todo.isDone = false;
    }
    $http.post('/api/todo', todo)
      .success(function(data) {
      })
      .error(function(data) {
        console.log(data);
      });
  }

  getTodos();
}]);
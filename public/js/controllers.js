todoApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.here = "MAIN";
}]);

todoApp.controller('todosCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.here = "MY TODOS";

  $http.get('/api/todos/test')
    .success(function(data) {
      $scope.myTodos = data;
    })
    .error(function(err) {
      console.log(err);
    });
  
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
}]);
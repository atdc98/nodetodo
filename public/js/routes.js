// ROUTES
todoApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/assets/views/index.html',
    controller: 'mainCtrl'
  })
  .when('/myTodos', {
    templateUrl: '/assets/partials/myTodos.htm',
    controller: 'todosCtrl'
  });
});
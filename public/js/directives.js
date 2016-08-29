// CUSTOM DIRECTIVES
todoApp.directive("addTodo", function() {
   return {
     restrict: 'E',
     templateUrl: '/assets/directives/add_todo.htm',
     replace: true
   }
});
app.controller('MainController', ['$scope', function($scope) {
  $scope.list = ["Clean my room", "Go to the store", "Study Cracking the Coding Interview"];
  $scope.addItem = function() {
    $scope.list.push($scope.addToDo);
  }
}])

// The view(index.html) and controller communicate via the scope, pass info

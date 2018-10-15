var todoListModule = angular.module('todoListModule', []);

//runs before application
todoListModule.config(function() {

});

todoListModule.controller('todoListController', ['$scope', function($scope) {
    $scope.message = "this is a controller message";
}]);
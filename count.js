var myApp=angular.module("myApp",[]);

myApp.controller("Ctrl1",function ($scope){
	$scope.items = [
    'Mango', 
    'Banana', 
    'Grape', 
    'Orange'
  ]
  $scope.addItem = function() {
  	$scope.items.push( $scope.newItem);
  	$scope.newItem = ''
  }
})

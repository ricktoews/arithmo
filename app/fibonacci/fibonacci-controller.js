angular.module('MathApp')

.controller('FibonacciCtrl', function($state, $stateParams, $scope, fibonacci) {
	$scope.mod = 1;
	var firstNth = $state.params.firstnth;

	fibonacci.getFirstN(firstNth).then((data) => {
		$scope.list = data;
	});

	$scope.setMod = function(n) {
		$scope.mod = n;
	};
});

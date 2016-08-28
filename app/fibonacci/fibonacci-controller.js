angular.module('MathApp')

.controller('FibonacciCtrl', function($state, $stateParams, $scope, fibonacci) {
	$scope.mod = 1;

	var firstNth = $state.params.firstnth;
	getFirstN();

	$scope.setInt = function() {
		firstNth = $scope.genericInt;
		getFirstN();
	};

	function getFirstN() {
		$scope.isEmpty = true;
		if (!firstNth) return;
		fibonacci.getFirstN(firstNth).then((data) => {
			$scope.list = data;
			$scope.isEmpty = false;
		});
	}

	$scope.setMod = function(n) {
		$scope.mod = n;
	};
});

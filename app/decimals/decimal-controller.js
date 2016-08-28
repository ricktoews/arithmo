angular.module('MathApp')

.controller('DecimalCtrl', function($state, $scope, DecimalModel) {
	$scope.denom = $state.params.denom;
	getDecimal();

	$scope.setInt = function() {
		$scope.denom = $scope.genericInt;

		getDecimal();
	};

	function getDecimal() {
		$scope.isEmpty = true;
		if (!$scope.denom) return;
		DecimalModel.getDecimal($scope.denom).then((data) => {
			$scope.decimal_data = data;
			$scope.isEmpty = false;
		});
	}
});

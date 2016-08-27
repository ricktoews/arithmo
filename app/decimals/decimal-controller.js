angular.module('MathApp')

.controller('DecimalCtrl', function($state, $scope, DecimalModel) {
	$scope.denom = $state.params.denom;

	DecimalModel.getDecimal($scope.denom).then((data) => {
		$scope.decimal_data = data;
	});
});

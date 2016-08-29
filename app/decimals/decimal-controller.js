angular.module('MathApp')

.controller('DecimalCtrl', function($state, $scope, DecimalModel) {
	$scope.denom = $state.params.denom;
	getDecimal();

	$scope.setInt = function() {
		$scope.denom = $scope.genericInt;

		getDecimal();
	};

	function setFlags() {
		var decimalData = $scope.decimal_data[0];
		var metaData = decimalData.metaData;

		$scope.flags = {
			isFullReptend: metaData.fullReptend,
			internalComplement: metaData.complementType === 'internal',
			externalComplement: metaData.complementType === 'external',
			hybrid: metaData.hybrid,
			resolves: metaData.complementType === 'none',
			isPrime: decimalData.factors.length === 0
		};
	}

	function getDecimal() {
		$scope.isEmpty = true;
		$scope.flags = {
			isFullReptend: false,
			internalComplement: false,
			externalComplement: false,
			hybrid: false
		};
		if (!$scope.denom || $scope.denom < 2) return;
		DecimalModel.getDecimal($scope.denom).then((data) => {
			$scope.decimal_data = data;
			$scope.isEmpty = false;
			$scope.factorList = data[0].factors;
			$scope.repeating = data[0].repeating;
			setFlags();
		});
	}
});

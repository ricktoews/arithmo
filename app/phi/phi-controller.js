angular.module('MathApp')

.controller('PhiCtrl', function($state, $scope, PhiModel) {
	var maxPower = $state.params.power;

	PhiModel.getPowers(maxPower).then((data) => {
		$scope.phi_data = data;
	});
});


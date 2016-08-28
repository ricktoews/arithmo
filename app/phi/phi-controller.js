angular.module('MathApp')

.controller('PhiCtrl', function($state, $scope, PhiModel) {
	var maxPower = $state.params.power;

	getPowers();

	$scope.setInt = function() {
		maxPower = $scope.genericInt;
		getPowers();
	};

	// This is currently not working, so we're going to do something different for now.
	$scope.updateMathJax = function() {
		MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	};

	function getPowers() {
		$scope.isEmpty = true;
		if (!maxPower) return;
		PhiModel.getPowers(maxPower).then((data) => {
			$scope.phi_data = data;
			$scope.isEmpty = false;
		});
	}
});


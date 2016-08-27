angular.module('MathApp')

.service('PhiModel', function($http) {
	function getPhiPowers(power) {
		var url = API.base + '/phi/powers/' + power;
		return $http.get(url).then((response) => {
			return response.data;
		});
	}

	this.getPowers = function(power) {
		return getPhiPowers(power).then((data) => {
			return data;
		});
	};
});


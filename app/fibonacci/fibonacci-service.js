angular.module('MathApp')

.service('fibonacci', function($http) {
	
	this.getFirstN = function(n) {
		var api = '/fib/' + n;
		var url = API.base + api;
		return $http.get(url).then((res) => {
			return res.data;	
		});
	};
});

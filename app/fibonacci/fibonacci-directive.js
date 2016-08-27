angular.module('MathApp')

.directive('fibonacci', function() {
	function link(scope, el, attrs) {
	}

	return {
		restrict: 'E',
		scope: {
			firstNth: '='
		},
		controller: 'FibonacciCtrl',
		templateUrl: './app/fibonacci/fibonacci-template.html',
		link: link
	};
});

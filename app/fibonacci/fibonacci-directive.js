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
})

.directive('fibonacciHeading', function() {
	return {
		restrict: 'A',
		templateUrl: './app/fibonacci/heading-template.html'
	};
})

.directive('fibonacciInfo', function() {
	return {
		restrict: 'A',
		templateUrl: './app/fibonacci/info-template.html'
	};
})

.directive('fibonacciData', function() {
	return {
		restrict: 'A',
		templateUrl: './app/fibonacci/data-template.html'
	};
})
;

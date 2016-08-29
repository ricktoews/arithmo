angular.module('MathApp')

.directive('decimalHeading', function() {
	return {
		restrict: 'A',
		templateUrl: './app/decimals/heading-template.html'
	};
})

.directive('decimalInfo', function() {
	function link(scope, el, attrs) {
	}

	return {
		restrict: 'A',
		templateUrl: './app/decimals/info-template.html',
		link: link
	};
})

.directive('decimalData', function() {
	function link(scope, el, attrs) {
		scope.popoverTemplate = './app/decimals/period-sum-template.html';
	}

	return {
		restrict: 'A',
		templateUrl: './app/decimals/data-template.html',
		link: link
	};
})
;

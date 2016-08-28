angular.module('MathApp')

.directive('decimalHeading', function() {
	return {
		restrict: 'A',
		templateUrl: './app/decimals/heading-template.html'
	};
})

.directive('decimalInfo', function() {
	return {
		restrict: 'A',
		templateUrl: './app/decimals/info-template.html'
	};
})

.directive('decimalData', function() {
	return {
		restrict: 'A',
		templateUrl: './app/decimals/data-template.html'
	};
})
;

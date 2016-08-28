angular.module('MathApp')

.directive('phiHeading', function() {
	return {
		restrict: 'A',
		templateUrl: './app/phi/heading-template.html'
	};
})

.directive('phiInfo', function() {
	return {
		restrict: 'A',
		templateUrl: './app/phi/info-template.html'
	};
})

.directive('phiData', function() {
	return {
		restrict: 'A',
		templateUrl: './app/phi/data-template.html'
	};
})
;

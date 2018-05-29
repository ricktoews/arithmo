angular.module('MathApp')

.directive('integerInput', function() {
	return {
		restrict: 'A',
		templateUrl: './arithmo/app/integer-input-template.html',
		link: (scope, el, attrs) => { scope.label = attrs.label; }
	};
});

angular.module('MathApp')

.directive('repeatDone', function() {
	return {
		restrict: 'A',
		link: function(scope, el, attrs) {
console.log('scope.last', scope.$last);
			if (scope.$last) {
				scope.updateMathJax();
			}
		}
	};
});

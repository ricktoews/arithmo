angular.module('MathApp')

.directive('arithmoHamburger', function() {
	return {
		restrict: 'AE',
		templateUrl: './app/arithmo-hamburger-template.html',
		link: function(scope, el, attrs) {
		}
	};
});

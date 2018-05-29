angular.module('MathApp')

.directive('arithmoHamburger', function() {
	return {
		restrict: 'AE',
		templateUrl: './arithmo/app/arithmo-hamburger-template.html',
		link: function(scope, el, attrs) {
		}
	};
});

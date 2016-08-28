angular.module('MathApp')

.directive('infoHeading', function() {
	return {
		restrict: 'A',
		scope: {
			title: '@'
		},
		template: '<h2 class="text-primary">{{title}}</h2>',
		link: function(scope, el, attrs) {
			scope.title = attrs.title;
		}
	};
});

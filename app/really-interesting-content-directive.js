angular.module('MathApp')

.directive('reallyInterestingContent', function() {
	function link () {}

	return {
		restrict: 'A',
		templateUrl: './app/really-interesting-content-template.html',
		link: link
	};
});

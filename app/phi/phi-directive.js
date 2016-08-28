angular.module('MathApp')

.directive('phiHeading', function() {
	return {
		restrict: 'A',
		templateUrl: './app/phi/heading-template.html'
	};
})

.directive('phiInfo', function() {
	$('#phi-sqrt-5-coef').on('mouseover', highlight);
	$('#phi-sqrt-5-coef').on('mouseout', unhighlight);

	function unhighlight() {
		$('.phi-fib').removeClass('highlight');
		$('.sqrt-5-coef').removeClass('highlight');
	}

	function highlight() {
		$('.phi-fib').addClass('highlight');
		$('.sqrt-5-coef').addClass('highlight');
	}

	return {
		restrict: 'A',
		templateUrl: './app/phi/info-template.html'
	};
})

.directive('phiData', function() {
	function link(scope, el, attrs) {
		console.log('phiData.el', el[0]);
	}

	return {
		restrict: 'A',
		templateUrl: './app/phi/data-template.html',
		link: link
	};
})
;

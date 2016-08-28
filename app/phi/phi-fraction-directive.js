angular.module('MathApp')

.directive('phiFraction', function() {
	return {
//		templateUrl: './app/phi/phi-mathjax-template.html'
		templateUrl: './app/phi/phi-fraction-template.html'
	}
})

.directive('phiFractionVariant', function() {
	return {
		templateUrl: './app/phi/phi-fraction-variant-template.html'
	}
})

;

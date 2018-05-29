angular.module('MathApp')

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider
		.state('index', {
			url: '/',
			controller: 'MainCtrl',
			templateUrl: './arithmo/app/main-template.html'
		})
		.state('fibonacci', {
			url: '/fibonacci/:firstnth',
			params: {
				firstnth: null,
				squash: true
			},
			controller: 'FibonacciCtrl',
			templateUrl: './arithmo/app/fibonacci/fibonacci-template.html'
		})
		.state('decimal', {
			url: '/decimals/:denom/:num',
			params: {
				num: {
					value: null,
					squash: true
				}
			},
			controller: 'DecimalCtrl',
			templateUrl: './arithmo/app/decimals/decimal-template.html'
		})
		.state('phi', {
			url: '/phi/:power',
			controller: 'PhiCtrl',
			templateUrl: './arithmo/app/phi/phi-powers-template.html'
		})
	;

//	$urlRouterProvider.otherwise('/');
});

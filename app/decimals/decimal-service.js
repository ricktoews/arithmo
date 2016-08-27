angular.module('MathApp')

.service('DecimalModel', function($http) {
	function getDC(denom, num) {
		var api = '/dc/' + denom;
		if (num) api += '/' + num;
		var url = API.base + api;

		return $http.get(url).then((response) => {
			return response.data;
		});
	}

	function addParts(item) {
		var preLength = item.decimal.length - item.repeating;
		item.parts = {pre:'', partA:'', partB:''};
		item.parts.pre = item.decimal.substr(0, preLength);
		var repeating = item.decimal.substr(preLength);
		if (item.repeating % 2 == 0) {
			item.parts.partA = repeating.substr(0, item.repeating / 2);
			item.parts.partB = repeating.substr(item.repeating / 2);
		} else {
			item.parts.partA = repeating;
		}
	}

	function addMeta(item) {
		var periodLength = 'Period length ' + item.decimal.length;
		if (item.repeating === item.decimal.length) {
			var repeat = 'entire period repeats.';
		} else if (item.repeating > 1) {
			repeat = item.repeating + ' digits repeat.';
		} else if (item.repeating === 1) {
			repeat = '1 digit repeats.';
		} else {
			repeat = 'period resolves.';
		}
		item.meta = periodLength + '; ' + repeat;
	}

	this.getDecimal = function(denom, num) {
		return getDC(denom, num).then((data) => {
			_.each(data, (item) => {
				addParts(item);
				addMeta(item);
			});

			return data;
		});
	};
});

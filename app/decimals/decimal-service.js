angular.module('MathApp')

.service('DecimalModel', function($http) {
	var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	function getDC(denom, num) {
		var api = '/dc/' + denom;
		if (num) api += '/' + num;
		var url = API.base + api;

		return $http.get(url).then((response) => {
			return response.data;
		});
	}


	/*
	 * Supplement REST payload.
	 */
	function addDenominatorFactors(recip) {
		var denom = recip.denom;
		var factors = [];
		var maxFactor = Math.floor(denom / 2);
		for (var i = 0; primes[i] <= maxFactor; i++) {
			while (denom % primes[i] === 0) {
				denom /= primes[i];
				factors.push(primes[i]);
			}
		}

		recip.factors = factors;
	}

	function _isFullReptend(recip) {
		return recip.repeating === recip.reducedDenom - 1;
	}

	function _getComplementType(recip) {
		var complementType = '';

		if (recip.repeating === 0) {
			complementType = 'none';
		} else if (recip.repeating % 2 === 0) {
			complementType = 'internal';
		} else {
			complementType = 'external';
		}

		return complementType;
	}

	function _isHybrid(recip) {
		return (recip.repeating > 0 && recip.repeating < recip.length);
	}

	function addMetaData(item) {
		var meta = {
			fullReptend: _isFullReptend(item),
			complementType: _getComplementType(item),
			hybrid: _isHybrid(item)
		};
		item.metaData = meta;
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

	this.getDecimal = function(denom, num) {
		return getDC(denom, num).then((data) => {
			addDenominatorFactors(data[0]);
			_.each(data, (item) => {
				addParts(item);
				addMetaData(item);
			});

			return data;
		});
	};
});

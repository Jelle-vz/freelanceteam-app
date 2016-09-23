var varify = function (status, response) {
	return (
		status &&
		(status).toString().match(/2[0-9][0-9]/) &&
		typeof response !== 'error'
	);
};
var isFunction = function (input) {
	return input && input.call;
};

var makeRequest = function (url, type) {
	var request = new XMLHttpRequest();
	var successCallbacks = [];
	var errorCallbacks = [];

	request.open('GET', url);

	request.onreadystatechange = request.then = function (successHandler, errorHandler) {
		var callbacks;
		var response;

		successCallbacks.push(successHandler);
		errorCallbacks.push(errorHandler);

		// Test if request is complete
		if (request.readyState === 4) {
			if (request.status === 0) {
				return; // request was cancelled
			}
			if (type === 'json') {
				try {
					response = JSON.parse(request.responseText);
				} catch (error) {
					response = error;
				}
			} else {
				response = request.responseText;
			}

			callbacks = varify(request.status, response) ? successCallbacks : errorCallbacks;

			callbacks.forEach(function (callback) {
				if (isFunction(callback)) {
					callback(response);
				}
			});
		}

		return request;
	};

	request.send();

	return request;
};

var parseSchema = function (schema, data) {
	if (!schema) {
		return "";
	}
	return Object.keys(data).reduce(function (result, item) {
		var expression = new RegExp('{' + item + '}', 'gi');
		try {
			return result.replace(expression, (data[item].length || data[item].toFixed) ? data[item] : '');
		} catch (error) {
			return result.replace(expression, '');
		}
	}, schema);
};

module.exports = {
	request: makeRequest,
	parseSchema: parseSchema
};

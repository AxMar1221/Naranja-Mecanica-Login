const axios = require('axios');

export const getDemo = params => {
	const URL = 'http://api.fruterialanaranjamecanica.com/"';

	return axios.get(URL).then(response => {
		return response.data;
	});
};

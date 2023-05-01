const request = require('request');

const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
  qs: {q: 'tesla', region: 'US'},
  headers: {
    'X-RapidAPI-Key': 'f21177308fmshff18110ae9b7fbfp1792dajsn535d1fbd616b',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
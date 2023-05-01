//import fetch from 'node-fetch';
//const fetch = require('node-fetch');

//import fetch from 'node-fetch';

const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f21177308fmshff18110ae9b7fbfp1792dajsn535d1fbd616b',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
const http = require("https");

const options = {
	"method": "GET",
	"hostname": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	"port": null,
	"path": "/auto-complete?q=tesla&region=US",
	"headers": {
		"X-RapidAPI-Key": "f21177308fmshff18110ae9b7fbfp1792dajsn535d1fbd616b",
		"X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
'use strict';

const express = require('express');
const faker = require('faker');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));
app.use(express.static('public'));

app.get('/jargon', (req, res) => {
	let jargon = {
		motto: faker.company.catchPhrase(),
		bs: faker.company.bs(),
		hackerAdjective: faker.hacker.adjective(),
		hackerNoun: faker.hacker.noun(),
		hackerVerb: faker.hacker.verb()
	};
	res.status(200).json(jargon);
})

app.listen(process.env.PORT || 8080, () => {
	console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
const express = require('express');


const app = express();

app.get('/', (req, res, next) => {
	res.send({ message: 'success' });
});

app.listen(3000, () => {
	const host = 'localhost'
	console.log(`Server is running on 3000 port ${host}`);
});

const express = require('express');
const app = express();

const port = process.env.PORT;

app.get('/test', (request, response) => {
    response.send('It\'s working!');
});

app.listen(port, () => {
    console.log('Started');
});

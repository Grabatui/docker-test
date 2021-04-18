const express = require('express');
const app = express();

app.get('/test', (request, response) => {
    response.send('It\'s working!');
});

app.listen(3000, () => {
    console.log('Started');
});

const express = require('express');
const { port } = require('./configuration');
const { connectToDatabase } = require('./helpers/db');

const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log('Auth server is started');
    });
};

app.get('/test', (request, response) => {
    response.send('It\'s working!');
});

connectToDatabase()
    .on('error', console.log)
    .on('disconnected', connectToDatabase)
    .once('open', startServer);

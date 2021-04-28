const express = require('express');
const { port } = require('./configuration');
const { connectToDatabase } = require('./helpers/db');

const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log('Auth server is started');
    });
};

app.get('/api/currentUser', (request, response) => {
    response.json({
        id: 111,
        email: 'foo@gmail.com',
    });
});

connectToDatabase()
    .on('error', console.log)
    .on('disconnected', connectToDatabase)
    .once('open', startServer);

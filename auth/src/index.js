const express = require('express');
const axios = require('axios');
const { port, mailUrl } = require('./configuration');
const { connectToDatabase } = require('./helpers/db');

const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log('Auth server is started');
    });
};

app.get('/currentUser', (request, response) => {
    response.json({
        id: 111,
        email: 'foo@gmail.com',
    });
});

app.post('/testMail', (request, response) => {
    axios.post(mailUrl + '/send', {subject: 'Hello from Auth!', body: 'Hello, Anatoliy!'}).then((mailResponse) => {
        response.json(mailResponse.data);
    });
});

connectToDatabase()
    .on('error', console.log)
    .on('disconnected', connectToDatabase)
    .once('open', startServer);

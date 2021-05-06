const express = require('express');
const axios = require('axios');
const { port, authUrl, mailUrl } = require('./configuration');
const { connectToDatabase } = require('./helpers/db');

const app = express();

app.use(express.json());

const startServer = () => {
    app.listen(port, () => {
        console.log('Api server is started');
    });
};

app.get('/withCurrentUser', (request, response) => {
    axios.get(authUrl + '/currentUser').then((authResponse) => {
        response.json({
            currentUser: authResponse.data,
        })
    });
});

app.post('/testMail', (request, response) => {
    axios.post(mailUrl + '/send', {subject: 'Hello from API!', body: 'Hello, Anatoliy!'}).then((mailResponse) => {
        response.json(mailResponse.data);
    });
});

connectToDatabase()
    .on('error', console.log)
    .on('disconnected', connectToDatabase)
    .once('open', startServer);

const express = require('express');
const axios = require('axios');
const { port, authUrl } = require('./configuration');
const { connectToDatabase } = require('./helpers/db');

const app = express();

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

connectToDatabase()
    .on('error', console.log)
    .on('disconnected', connectToDatabase)
    .once('open', startServer);

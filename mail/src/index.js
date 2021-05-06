const express = require('express');
const mailgun = require('mailgun-js');

const { port, mailgunApiKey, mailgunDomain } = require('./configuration');

const app = express();

app.use(express.json());

app.post('/send', (request, response) => {
    const sender = mailgun({
        apiKey: mailgunApiKey,
        domain: mailgunDomain,
    });

    sender.messages().send(
        {
            from: 'Excited User <me@' + mailgunDomain + '>',
            to: 'bitolyan@ya.ru',
            subject: request.body.subject || '',
            text: request.body.body || '',
        },
        (error, body) => {
            console.log(error);
            console.log(body);

            response.json({status: error ? 'error' : 'success'});
        }
    );
});

app.listen(port);

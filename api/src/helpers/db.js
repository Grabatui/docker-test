const mongoose = require('mongoose');
const { db } = require('../configuration');

module.exports.connectToDatabase = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return mongoose.connection;
};

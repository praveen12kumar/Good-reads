const mongoose = require('mongoose');

const { DB_URL } = require('./server-config');
const {DB_NAME} = require('../utils/constants');

const connect = async () => {
    const connection = await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log(`Mongo db connected : hostname ${connection.connection.host}`);
    }

module.exports = {
    connect
}
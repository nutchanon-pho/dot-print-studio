import mongoose from 'mongoose';
import Promise from 'promise';
import * as config from '../config';

const options = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
};

mongoose.Promise = Promise;
mongoose.connect(config.getDbConnectionString(), options).then(
    () => {
        console.log('success');
    },
    (err) => {
        console.log(err);
    },
);

module.exports = mongoose;

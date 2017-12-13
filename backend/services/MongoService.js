import mongoose from 'mongoose';
import Promise from 'promise';
import nconf from '../config';

const options = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
};

const connectionString = `mongodb://${nconf.get('mongo:host')}:${nconf.get('mongo:port')}`;

mongoose.Promise = Promise;
mongoose.connect(connectionString, options).then(
    () => console.log('success'),
    err => console.log(`error on connection to mongo ${err}`),
).catch(err => console.log(`error on connection to mongo ${err}`));

module.exports = () => ({
    mongoose,
    findOneMongo: async (schema, query, projection = {}) => {
        try {
            return await schema.findOne(query, projection);
        } catch (error) {
            throw new Error(`select error of mongo: ${error}`);
        }
    },
    createRecord: async (schema, statement) => {
        try {
            return await schema.create(statement);
        } catch (error) {
            throw new Error(`create record error of mongo: ${error}`);
        }
    },
});

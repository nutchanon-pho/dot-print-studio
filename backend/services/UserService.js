import MongoService from '../services/MongoService';
import Users from '../models/Users';

const mongoService = MongoService();

module.exports = () => ({
    getUserData: async (username) => {
        try {
            const query = {
                username,
            };
            return await mongoService.findOneMongo(Users, query);
        } catch (exception) {
            throw exception;
        }
    },
    getUserDataFB: async (uuid) => {
        try {
            const query = {
                'accounts.facebook.uuid': uuid,
            };
            return await mongoService.findOneMongo(Users, query);
        } catch (exception) {
            throw exception;
        }
    },
});

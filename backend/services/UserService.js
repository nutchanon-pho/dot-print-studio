import MongoService from '../services/MongoService';
import Users from '../models/Users';

const mongoService = MongoService();

module.exports = () => ({
    getUserData: async (username) => {
        try {
            const query = {
                username,
            };
            const userData = await mongoService.findOneMongo(Users, query);
            return userData;
        } catch (exception) {
            return exception;
        }
    },
});

import * as bcrypt from 'bcrypt';
import Users from '../models/Users';
import MongoService from '../services/MongoService';

const saltRounds = 10;
const mongoService = MongoService();

module.exports = () => ({
    login: async (kind, username, inputPassword) => {
        const query = {
            username,
        };
        try {
            const queryResult = await mongoService.findOneMongo(Users, query);
            console.log(queryResult);
            const { role } = queryResult;
            const { password } = queryResult.accounts.local;
            const comparedPassword = await bcrypt.compare(inputPassword, password);
            const result = {
                username,
                role,
            };
            if (comparedPassword === true) {
                return result;
            }
            return {};
        } catch (error) {
            throw new Error(error);
        }
    },
    register: async (kind, username, password) => {
        try {
            const hashResult = await bcrypt.hash(password, saltRounds);
            const user = {
                username,
                isActive: true,
                role: 'user',
                accounts: {
                    local: {
                        password: hashResult,
                    },
                },
            };
            return mongoService.createRecord(Users, user);
        } catch (error) {
            throw new Error(error);
        }
    },
});

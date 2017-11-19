import * as bcrypt from 'bcrypt';
import Users from '../models/Users';
import MongoService from '../services/MongoService';

const saltRounds = 10;
const mongoService = MongoService();

async function getUserData(username) {
    const query = {
        username,
    };
    return mongoService.findOneMongo(Users, query);
}

module.exports = () => ({
    login: async (kind, username, inputPassword) => {
        try {
            const queryResult = await getUserData(username);
            if (queryResult != null) {
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
            }
            return {};
        } catch (error) {
            throw new Error(error);
        }
    },
    register: async (kind, username, password) => {
        try {
            const checkUserExists = await getUserData(username);
            if (checkUserExists != null) {
                throw new Error(`user ${username} exists`);
            }
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

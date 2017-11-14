import * as bcrypt from 'bcrypt';
import AuthUsers from '../models/authusers';
import * as mongoDBService from '../services/mongodbservice';

const saltRounds = 10;

module.exports = () => ({
    login: async (kind, username, inputPassword) => {
        const query = {
            username,
        };
        try {
            const queryResult = await mongoDBService.findMongo(AuthUsers, query);
            const { password } = queryResult.accounts.local;
            const comparedPassword = await bcrypt.compare(inputPassword, password);
            if (comparedPassword === true) {
                return queryResult;
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
                role: 'user',
                accounts: {
                    local: {
                        password: hashResult,
                    },
                },
            };
            return mongoDBService.createRecord(AuthUsers, user);
        } catch (error) {
            throw new Error(error);
        }
    },
});

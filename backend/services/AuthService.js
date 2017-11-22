import * as bcrypt from 'bcrypt';
import Users from '../models/Users';
import MongoService from '../services/MongoService';

const saltRounds = 10;
const mongoService = MongoService();

async function getUserData(username) {
    const query = { username };
    return mongoService.findOneMongo(Users, query);
}

function returnUserDataFiltered(userData) {
    const {
        _id,
        username,
        role,
        details,
        orders,
    } = userData;
    const result = {
        _id,
        username,
        role,
        details,
        orders,
    };
    return result;
}

module.exports = () => ({
    login: async (username, inputPassword) => {
        try {
            const queryResult = await getUserData(username);
            if (queryResult != null) {
                const { password } = queryResult.accounts.local;
                const comparedPassword = await bcrypt.compare(inputPassword, password);
                if (comparedPassword === true) {
                    const result = returnUserDataFiltered(queryResult);
                    return result;
                }
            }
            return null;
        } catch (error) {
            throw new Error(error);
        }
    },
    register: async (username, password) => {
        try {
            const checkUserExists = await getUserData(username);
            if (checkUserExists != null) {
                throw new Error(`user ${username} exists`);
            }
            const hashResult = await bcrypt.hash(password, saltRounds);
            const user = {
                username,
                is_active: true,
                role: 'user',
                accounts: {
                    local: {
                        password: hashResult,
                    },
                },
            };
            const recordData = mongoService.createRecord(Users, user);
            const result = returnUserDataFiltered(recordData);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
});

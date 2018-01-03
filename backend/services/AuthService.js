import * as bcrypt from 'bcrypt';
import Users from '../models/Users';
import MongoService from '../services/MongoService';
import UserService from '../services/UserService';

const saltRounds = 10;
const mongoService = MongoService();
const userService = UserService();

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
            const queryResult = await userService.getUserData(username);
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
            throw error;
        }
    },
    register: async (username, password) => {
        try {
            const checkUserExists = await userService.getUserData(username);
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
            const recordData = await mongoService.createRecord(Users, user);
            const result = returnUserDataFiltered(recordData);
            return result;
        } catch (error) {
            throw error;
        }
    },
});

import UserService from '../services/UserService';

const userService = UserService();

module.exports = {
    getUser: async (req, res) => {
        try {
            const { username } = req.body;
            const userData = await userService.getUserData(username);
            if (userData == null) {
                res.status(403).json();
            }
            res.status(200).json(userData);
        } catch (exception) {
            console.error('error on user route', exception);
            res.status(403).json();
        }
    },
};

import AuthService from '../services/AuthService';

const authService = AuthService();

module.exports = {
    login: async (req, res) => {
        try {
            const { kind, username, password } = req.body;
            const loginInfo = await authService.login(kind, username, password);
            res.json(loginInfo);
        } catch (exception) {
            res.status(500).send(exception);
        }
    },
    register: async (req, res) => {
        try {
            const { kind, username, password } = req.body;
            const result = await authService.register(kind, username, password);
            res.json(result);
        } catch (exception) {
            res.status(500).send(`unable to register ${exception}`);
        }
    },
};

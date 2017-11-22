import jwt from 'jsonwebtoken';
import passport from '../middlewares/passport';
import AuthService from '../services/AuthService';

const authService = AuthService();

module.exports = {
    login: passport.authenticate('local', { session: false }),
    generateToken: (req, res, next) => {
        req.token = jwt.sign({
            username: req.user.username,
        }, 'server secret', {
            expiresIn: '1h',
        });
        next();
    },
    respond: (req, res) => {
        res.status(200).json({
            user: req.user,
            token: req.token,
        });
    },
    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            const result = await authService.register(username, password);
            res.json(result);
        } catch (exception) {
            res.status(500).send(`unable to register ${exception}`);
        }
    },
};

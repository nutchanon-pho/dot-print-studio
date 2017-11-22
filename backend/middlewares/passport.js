import passport from 'passport';
import Strategy from 'passport-local';
import AuthService from '../services/AuthService';

const authService = AuthService();

passport.use(new Strategy(async (username, password, done) => {
    try {
        const loginInfo = await authService.login(username, password);
        if (loginInfo === null) {
            done(null, false);
        }
        done(null, loginInfo);
    } catch (exception) {
        done(null, false);
    }
}));

module.exports = passport;

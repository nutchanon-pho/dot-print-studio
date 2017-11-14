import AuthService from '../services/AuthService';

const authService = AuthService();

module.exports = {
    init: (app) => {
        app.post('/auth/login', (req, res) => {
            try {
                const { kind, username, password } = req.body;
                const loginInfo = authService.login(kind, username, password);
                loginInfo.then((result) => {
                    res.json(result);
                }).catch((err) => {
                    res.status(500).send(`server error occured ${err}`);
                });
            } catch (exception) {
                res.status(500).send(exception);
            }
        });

        app.post('/auth/register', (req, res) => {
            try {
                const { kind, username, password } = req.body;
                const passwordHash = authService.register(kind, username, password);
                passwordHash.then((result) => {
                    res.send(result);
                }).catch((err) => {
                    res.status(500).send(`unable to hash key ${err}`);
                });
            } catch (exception) {
                res.status(500).send(exception);
            }
        });
    },
};

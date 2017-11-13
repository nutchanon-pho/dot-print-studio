import * as authService from '../services/AuthService';

module.exports = {
    init: (app) => {
        app.post('/auth/login', (req, res) => {
            try {
                const { kind, username, password } = req.body;
                const loginInfo = authService.login(kind, username, password);
                loginInfo.then((result) => {
                    res.json(result);
                }).catch((err) => {
                    res.status(500).send(err);
                });
            } catch (exception) {
                res.status(500).send();
            }
        });

        app.post('/auth/register', (req, res) => {
            const { kind, username, password } = req.body;
            const passwordHash = authService.register(kind, username, password);
            passwordHash.then((result) => {
                res.send(result);
            }).catch((err) => {
                res.status(500).send(`unable to hash key ${err}`);
            });
        });
    },
};

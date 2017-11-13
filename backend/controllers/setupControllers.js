import AuthUsers from '../models/authusers';

// for setup data purposes
module.exports = {
    setAdmin: (app) => {
        app.get('/api/setupAuthUsers/admin', (req, res) => {
            // seed auth users data
            const adminUser = {
                firstname: 'admin',
                lastname: 'admin',
                username: 'paspro3@gmail.com',
                role: 'admin',
                accounts: {
                    local: {
                        kind: 'local',
                        username: 'admin',
                        password: 'dotprint123*',
                    },
                },
            };

            AuthUsers.create(adminUser, (err, result) => {
                res.send(result);
            });
        });
    },
};


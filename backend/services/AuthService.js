import * as bcrypt from 'bcrypt';
import Promise from 'promise';
import AuthUsers from '../models/authusers';

const saltRounds = 10;

module.exports = {
    login: (kind, username, inputPassword) =>
        new Promise((resolve, reject) => {
            const query = {
                username,
            };
            console.log(query);
            AuthUsers.find(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(result.local);
                    const { password } = result.accounts.local;
                    bcrypt.compare(inputPassword, password).then((res) => {
                        if (res === true) {
                            resolve(result);
                        }
                        reject(err);
                    });
                    resolve(result);
                }
            });
        }),

    register: (kind, username, password) =>
        new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    const user = {
                        username,
                        role: 'user',
                        accounts: {
                            local: {
                                password: hash,
                            },
                        },
                    };
                    AuthUsers.create(user, (authError, result) => {
                        if (authError) {
                            reject(authError);
                        } else if (result) {
                            resolve(hash);
                        }
                    });
                }
            });
        }),
};

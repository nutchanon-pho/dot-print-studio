import * as jwt from 'jsonwebtoken';

const secret = 'some-secret';

module.exports = () => ({
    sign: async (data) => {
        jwt.sign({
            data,
        }, secret, {
            expiresIn: '1h',
        });
    },
    verify: async (token) => {
        try {
            return await jwt.verify(token, secret);
        } catch (exception) {
            throw new Error(`unable to parse payload for ${token}`);
        }
    },
});

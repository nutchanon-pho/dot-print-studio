import * as jwt from 'jsonwebtoken';

const secret = 'some-secret';

module.exports = () => ({
    signJWT: async (data) => {
        try {
            return jwt.sign(data, secret, { expiresIn: '1h' });
        } catch (exception) {
            throw new Error('unable to sign JWT');
        }
    },
    verifyJWT: async (token) => {
        try {
            return await jwt.verify(token, secret);
        } catch (exception) {
            throw new Error('unable to verify JWT');
        }
    },
});

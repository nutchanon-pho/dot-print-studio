import { mongoose } from '../services/mongodbservice';

const { Schema } = mongoose;

// const localAuthSchema = new Schema({
//     password: String,
// });
// const fbAuthSchema = new Schema({
//     uid: String,
// });
// const accountsSchema = new Schema({
//     local: localAuthSchema,
//     facebook: fbAuthSchema,
// });
const authSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    role: String,
    accounts: {
        local: {
            password: String,
        },
    },
});

const AuthUsers = mongoose.model('AuthUsers', authSchema);
module.exports = AuthUsers;

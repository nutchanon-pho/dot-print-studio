import MongoService from '../services/MongoService';

const mongoService = MongoService();
const { mongoose } = mongoService;
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    rec_created_when: { type: Date, default: Date.now },
    role: { type: String, required: true },
    accounts: {
        local: {
            password: String,
        },
        facebook: {
            uuid: String,
        },
        google: {
            uuid: String,
        },
    },
    details: {
        firstname: String,
        lastname: String,
        phone: String,
        address: {
            address1: String,
            address2: String,
            postal_code: String,
        },
    },
    billing: {
        name: String,
        type: String,
        number: String,
    },
    orders: {
        history: [{
            order_id: Number,
            order_created_when: String,
        }],
        tracking: [{
            order_id: { type: Number },
            order_created_when: { type: Number },
        }],
    },
    reset_password: {
        token: String,
        expires: Date,
    },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;

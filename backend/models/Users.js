import MongoService from '../services/MongoService';

const mongoService = MongoService();
const { mongoose } = mongoService;
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    timeCreated: { type: Date, default: Date.now },
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
            postalCode: String,
        },
    },
    billing: {
        name: String,
        type: String,
        number: String,
    },
    orders: {
        history: [{
            orderId: Number,
            orderedWhen: String,
        }],
        tracking: [{
            orderId: { type: Number },
            orderItemId: { type: Number },
        }],
    },
    resetPassword: {
        token: String,
        expires: Date,
    },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;

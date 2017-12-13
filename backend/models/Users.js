import MongoService from '../services/MongoService';

const mongoService = MongoService();
const { mongoose } = mongoService;
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    recCreatedWhen: { type: Date, default: Date.now },
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
        nameOnCard: String,
        brand: String,
        last4Digits: String,
        customerToken: String,
    },
    orders: {
        history: [{
            orderId: Number,
            orderCreatedWhen: { type: Date, default: Date.now },
        }],
        tracking: [{
            orderId: { type: Number },
            orderCreatedWhen: { type: Date, default: Date.now },
        }],
    },
    reset_password: {
        token: String,
        expires: Date,
    },
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;

import MongoService from '../services/MongoService';

const mongoService = MongoService();
const { mongoose } = mongoService;
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true },
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

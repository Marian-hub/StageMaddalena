const
    mongoose = require('mongoose'),
    { Schema } = require('mongoose');

const MeetingSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    guestCompanyName: {
        type: String,
        required: true
    },
    guests: {
        type: Array,
        required: true,
        name: {
            type: String,
            required: true
        }
    },
    logo: {
        type: String,
        required: true
    },
    displayState: {
        type: Boolean,
        required: false,
        default: false
    }
})
const Meeting = mongoose.model('Meeting', MeetingSchema)
module.exports = Meeting
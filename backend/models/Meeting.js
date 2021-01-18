const
    mongoose = require('mongoose'),
    { Schema } = require('mongoose');

const MeetingSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    guests: {
        type: Array,
        required: true,
        name: {
            type: String,
            required: true
        }
    }

})
const Meeting = mongoose.model('Meeting', MeetingSchema)
module.exports = Meeting
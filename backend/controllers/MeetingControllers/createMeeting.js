const Meeting = require('../../models/Meeting');

const createMeeting = (req, res, next) => {
    const { date, guests } = req.body
    console.log(req.body)
    Meeting.create({
        date: date,
        guests: guests
    }, (error, document) => {
        if (error) { return res.status(500) }
        return res.send(document)
    })
}

module.exports = createMeeting 
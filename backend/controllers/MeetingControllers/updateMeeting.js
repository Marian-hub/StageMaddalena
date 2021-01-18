const Meeting = require('../../models/Meeting')

const updateMeeting = (req, res) => {
    const { Date } = req.query
    const { date, guests } = req.body
    Meeting.findOneAndUpdate({ date: Date }, {
        date: date,
        guests: guests
    }, (err, doc) => {
        if (err) { return res.status(500) }
        return res.status(200).send(doc)
    })
}

module.exports = updateMeeting
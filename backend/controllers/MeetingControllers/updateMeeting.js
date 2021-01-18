const Meeting = require('../../models/Meeting')

const updateMeeting = (req, res) => {
    const { Date } = req.params
    const { date, guests } = req.body
    Meeting.findOneAndDelete({ date: Date }, {
        date: date,
        guests: guests
    }, (err, doc) => {
        if (err) { return res.status(500) }
        return res.status(200).send(doc)
    })
}

module.exports = updateMeeting
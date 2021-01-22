const Meeting = require('../../models/Meeting')

const updateMeeting = (req, res) => {
    const { Date } = req.query
    const { date, guests, logo } = req.body
    Meeting.findOneAndUpdate({ date: Date }, {
        date: date,
        guests: guests,
        logo: logo,
    }, (err, doc) => {
        if (err) { return res.status(500) }
        return res.status(200).send(doc)
    })
}

module.exports = updateMeeting
const Meeting = require('../../models/Meeting')

const deleteMeeting = (req, res) => {
    const { Date } = req.query
    Meeting.findOneAndDelete({ date: Date }, {}, (err, document) => {
        if (err) { return res.status(404) }
        return res.status(200).send(document)
    })
}

module.exports = deleteMeeting 
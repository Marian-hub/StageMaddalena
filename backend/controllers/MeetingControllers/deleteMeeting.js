const Meeting = require('../../models/Meeting')

const deleteMeeting = (req, res) => {
    const { Date } = req.params
    Meeting.findByIdAndDelete({ date: Date }, {}, (err, document) => {
        if (err) { return res.status(404) }
        return res.send(document)
    })
}

module.exports = deleteMeeting 
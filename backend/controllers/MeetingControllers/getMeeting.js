const Meeting = require('../../models/Meeting')

const getMeeting = (req, res, next) => {
    if (req.params === {}) {
        Meeting.find({}, (err, docs) => {
            if (err) { return res.status(500) }
            return res.send(docs)
        })
    }
    const { Date } = req.params
    Meeting.find({ date: Date }, (err, docs) => {
        if (err) { return res.status(500) }
        return res.status(200).send(docs)
    })
}

module.exports = getMeeting 
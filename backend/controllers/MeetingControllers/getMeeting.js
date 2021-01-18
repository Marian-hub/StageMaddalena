const Meeting = require('../../models/Meeting')

const getMeeting = (req, res, next) => {
    const { Date } = req.params
    if (typeof Date === "undefined") {
        Meeting.find({}, (err, docs) => {
            if (err) { return res.status(500) }
            return res.status(200).send(docs)
        })
    } else {
        Meeting.find({ date: Date }, (err, docs) => {
            if (err) { return res.status(500) }
            return res.status(200).send(docs)
        })
    }

}

module.exports = getMeeting 
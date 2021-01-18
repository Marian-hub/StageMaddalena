const
    createMeeting = require('./MeetingControllers/createMeeting'),
    updateMeeting = require('./MeetingControllers/updateMeeting'),
    getMeeting = require('./MeetingControllers/getMeeting'),
    deleteMeeting = require('./MeetingControllers/deleteMeeting');

module.exports = {
    createMeeting,
    updateMeeting,
    deleteMeeting,
    getMeeting
}
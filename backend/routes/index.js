const
    meetingRouter = require('./meetingRoutes/meetingRoutes'),
    router = require('express').Router();

router.use(meetingRouter)

module.exports = router
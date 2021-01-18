const
    router = require('express').Router(),
    {
        createMeeting,
        deleteMeeting,
        updateMeeting,
        getMeeting,
    } = require('../../controllers/index')

router.post('/createMeeting', createMeeting)
router.post('/updateMeeting/:date', updateMeeting)
router.get('/getMeeting/:date', getMeeting)
router.get('/getMeeting/', getMeeting)
router.delete('/deleteMeeting', deleteMeeting)
module.exports = router
const
    router = require('express').Router(),
    {
        createMeeting,
        deleteMeeting,
        updateMeeting,
        getMeeting,
    } = require('../../controllers/index')

router.post('/createMeeting', createMeeting)
router.post('/updateMeeting', updateMeeting)
router.get('/getMeeting', getMeeting)
router.delete('/deleteMeeting', deleteMeeting)
module.exports = router
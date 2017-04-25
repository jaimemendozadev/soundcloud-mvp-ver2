var router = require('express').Router();
var controller = require('../controllers');

router.get('/allplaylists', controller.getAllPlayLists);
router.get('/aplaylist', controller.getAPlayList);
router.post('/aplaylist', controller.postAPlayList);
router.delete('/aplaylist/:title', controller.deleteAPlayList);

module.exports = router;






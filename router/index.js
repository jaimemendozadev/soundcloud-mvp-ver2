var router = require('express').Router();
var controller = require('../controllers');


//Do I still need this route?
router.get('/aplaylist', controller.getAPlayList);

//Working routes
router.get('/allplaylists', controller.getAllPlayLists);
router.post('/aplaylist', controller.postAPlayList);
router.delete('/aplaylist/:id', controller.deleteAPlayList);

module.exports = router;






const express = require("express");

const friendsController = require("../controllers/friends");
const router = express.Router();


router.get('/friends', friendsController.getAllFriends);

router.get('/friends/:id', friendsController.getFriendById);

router.post('/friends', friendsController.addFriend);

router.post('/friends/:id', friendsController.deleteFriend);

router.post('/friends/:id', friendsController.updateFriend)

modules.export = router;
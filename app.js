const friendsController = require('./controllers/friends');


const friendsRouter = require("./routes/friends");

const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(friendsRouter)

// app.get('/friends', friendsController.getAllFriends);

// app.get('/friends/:id', friendsController.getFriendById);

// app.post('/friends', friendsController.addFriend);

// app.post('/friends/:id', friendsController.deleteFriend);

// app.post('/friends/:id', friendsController.updateFriend)

app.listen(port, () => console.log(`Now listening on port ${port}...`));


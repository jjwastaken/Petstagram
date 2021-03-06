//import { firebase, database } from './index.js';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
    {
        username: 'albertbabycat',
        followers: 2,
        following: 5,
        id: 0,
    }
];
let currentId = 1;

// configure firebase app

// when firebase works?
/*function getUsers() {
    const ref = firebaseApp.database().ref('facts');
    return ref.once('value').then(snap => snap.val());
}*/

app.get('/profiles/:username', (request, response) => {
    const username = request.params.username;
    //response.send(request.params.username);
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            response.send(users[i]);
            return;
        }
    }
    //response.send(users[0]);
    // how to send one specific user profile (i.e. the actual user's profile?)
});

app.get('/profiles', (req, res) => {
    res.send(users);
})

app.post('/profiles', (request, response) => {
    const user = request.body;
    user.id = currentId;
    currentId++;
    users.push(user);
    response.send({ success: true });
});

app.listen(3001, () => {
    console.log('Server has started');
});

module.exports = app;
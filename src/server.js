//import { firebase, database } from './index.js';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const admin = require('firebase-admin');
const databasePassword = require('./firebase-password.json');

admin.initializeApp({
    credential: admin.credential.cert(databasePassword)
});

const db = admin.firestore();

const profiles = db.collection('profiles')

const users = [
    {
        username: 'albertbabycat',
        password: '12345',
        // followers and following can be arrays of usernames
        // will just have to deal with retrieval elsewhere
        followers: [],
        following: [],
        id: 0,
    }
];
let currentId = 1;

var self = null;

// configure firebase app

// when firebase works?
/*function getUsers() {
    const ref = firebaseApp.database().ref('facts');
    return ref.once('value').then(snap => snap.val());
}*/

app.get('/profiles/:username', async (request, response) => {
    const username = request.params.username;
    const taskRef = await profiles.doc(username).get();
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

// save self
app.post('/self', (request, response) => {
    const username = request.body.username;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            self = users[i]
            response.send({ success: true })
            return;
        }
    }
});

// get self
app.get('/self', (request, response) => {
    response.send(self);
})

app.get('/profiles', (req, res) => {
    res.send(users);
})

app.post('/profiles', async (request, response) => {
    const user = request.body;
    user.id = currentId;
    currentId++;
    users.push(user);
    await profiles.doc(user.username).set(user);
    response.send({ success: true });
});

// self follow user
/*app.post('/profiles/:user/:self', (request, response) => {
    const username = request.params.user;
    const selfname = request.params.self;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            users[i].followers.push(selfname)
        }
        else if (users[i].username === selfname) {
            users[i].following.push(username)
        }
    }
})*/

// app.patch or whatever to modify existing user

app.listen(3001, () => {
    console.log('Server has started');
});

module.exports = app;
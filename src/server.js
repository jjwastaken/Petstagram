//import { firebase, database } from './index.js';

// import the Firebase library.
const admin = require('firebase-admin');

// import the password.
const databasePassword = require('./firebase-password.json');

// tell the library to connect to the database for us 
// using the given password.
admin.initializeApp({
    credential: admin.credential.cert(databasePassword)
});

// this is our database object.
const db = admin.firestore();

// const tasks = new Map(); 
const uMap = db.collection('uMap');



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
    {
        username: 'albertbabycat',
        // followers and following can be arrays of usernames
        // will just have to deal with retrieval elsewhere
        followers: 0,
        following: 2,
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
    //response.send(request.params.username);
	const userRef = await uMap.doc(username).get();
	
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
    response.send({ success: true });
	
	await uMap.doc(user.username).set(uMap);
});

// app.patch or whatever to modify existing user

app.listen(3001, () => {
    console.log('Server has started');
});

module.exports = app;
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

const profiles = db.collection('profiles');
const posts = db.collection('posts');

const users = [
    {
        username: '',
        password: '',
        // followers and following can be arrays of usernames
        // will just have to deal with retrieval elsewhere
        followers: [],
        following: [],
        id: 0,
    }
];
let currentId = 1;

var self = {
	username : ""
};

// configure firebase app

// when firebase works?
/*function getUsers() {
    const ref = firebaseApp.database().ref('facts');
    return ref.once('value').then(snap => snap.val());
}*/

app.get('/profiles/:username', (request, response) => {
    const username = request.params.username;
    //const taskRef = await profiles.doc(username).get();
    profiles.doc(username)
        .get()
        .then(snap => {
            response.send(snap.data())
        });
    //response.send(request.params.username);
    /*for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            response.send(users[i]);
            return;
        }
    }*/
    //response.send(users[0]);
    // how to send one specific user profile (i.e. the actual user's profile?)
});

// save self
app.post('/self', async (request, response) => {
    const username = request.body.username;
	//console.log("entered");
	//console.log(username);
    /*for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            self = users[i]
            response.send({ success: true })
            return;
        }
    }*/
	if (username != "")
	{
		const profileRef = await profiles.doc(username).get();
		self = profileRef.data();
	}
	//response.send( { success: true });
});

// get self
app.get('/self', (request, response) => {
	const username = request.params.username;
    if (self) {
        profiles.doc(self.username)
            .get()
			.then(snap => {
				response.send(snap.data())
            });
    }
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

/*app.put('/profiles', (request, response) => {
    const user = request.body.user;
    const self = request.body.self;
    profiles.doc(user)
        .update({
            followers: followers.concat([self]),
        });
    profiles.doc(self)
        .update({
            following: following.concat([user]),
        })
})

app.get('/profiles/:username/followers', (request, response) => {

})

app.get('/profiles/:username/following', (request, response) => {
    
})*/

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

/*app.patch('/profiles', (request, response) => {
    username = request.body.username;
    profiles.doc(username)
        .get()
        .then(function(doc){
            doc.data().posts;
        })
})

app.get('/posts/:postID', (request, response) => {
    postID = request.params.postID;
    posts.doc(postID)
        .get()
        .then(function(doc) {
            response.send(doc.data())
        });
});

app.patch('/posts', (request, response) => {
    id = request.body.id;
    posts.doc(id)
        .update({

        })
})*/

app.listen(3001, () => {
    console.log('Server has started');
});

module.exports = app;
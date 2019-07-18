const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3200;
const app = express();
const token =
    'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let loginUrl = 'https://dad-jokes-back-end.herokuapp.com/auth/login';
let signingUrl = 'https://dad-jokes-back-end.herokuapp.com/auth/signup';

let jokes = [
    {
        id: 1,
        name: 'Forgetful Dad',
        jokeBody: 'My wife is so negative. I remembered the car seat, the stroller, AND the diaper bag. Yet all she can talk about is how I forgot the baby.',
        addedBy: '',
    },
    {
        id: 2,
        name: 'Award Winning',
        jokeBody: 'Q. Why did the scarecrow win an award? A. Because he was outstanding in his field.',
        addedBy: ''
    },
    {
        id: 3,
        name: 'Cheesy',
        jokeBody: 'Q. Did you hear about the cheese factory that exploded in France? A. There was nothing left but de Brie.',
        addedBy: ''
    },
    {
        id: 4,
        name: 'Ocean Waving',
        jokeBody: 'Q. What did the ocean say to the sailboat? A. Nothing, it just waved.',
        addedBy: ''
    }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === token) {
        next();
    } else {
        res.status(403).json({ error: 'User must be logged in to do that.' });
    }
}

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'User' && password === 'Pass') {
        req.loggedIn = true;
        res.status(200).json({
            payload: token
        });
    } else {
        res
            .status(403)
            .json({ error: 'Username or Password incorrect. Test login info is: username: User, password: Pass' });
    }
});

app.get('/api/jokes', authenticator, (req, res) => {
    setTimeout(() => {
        res.send(jokes);
    }, 1000);
});

app.get('/api/jokes/:id', authenticator, (req, res) => {
    const joke = jokes.find(f => f.id == req.params.id);

    if (joke) {
        res.status(200).json(joke);
    } else {
        res.status(404).send({ msg: 'joke not found' });
    }
});

app.post('/api/jokes', authenticator, (req, res) => {
    const joke = { id: getNextId(), ...req.body };

    jokes = [...jokes, joke];

    res.send(jokes);
});

app.put('/api/jokes/:id', authenticator, (req, res) => {
    const { id } = req.params;

    const jokeIndex = jokes.findIndex(f => f.id == id);

    if (jokeIndex > -1) {
        const joke = { ...jokes[jokeIndex], ...req.body };

        jokes = [
            ...jokes.slice(0, jokeIndex),
            joke,
            ...jokes.slice(jokeIndex + 1)
        ];
        res.send(jokes);
    } else {
        res.status(404).send({ msg: 'Joke not found' });
    }
});

app.delete('/api/jokes/:id', authenticator, (req, res) => {
    const { id } = req.params;

    jokes = jokes.filter(f => f.id !== Number(id));

    res.send(jokes);
});

function getNextId() {
    return nextId++;
}

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const uuidv1 = require('uuid/v1');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
require('./schemas/models.js').initialize();

const api = require('./api');

const PORT = 8080;

const app = express();

mongoose.connect('mongodb://localhost:27017/todoapp');
mongoose.Promise = global.Promise;

app.use(cors({methods: ['GET', 'POST', 'PUT', 'DELETE'],credentials: true, origin: true}));

app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    if(!req.cookies.uid) {
      let uid = uuidv1();
      res.cookie("uid", uid, { maxAge: Date.now() + 10000000, httpOnly: true });
    }
    next();
});

app.use('/', express.static('public'));
app.use('/api', api);

app.listen(PORT, () => {
    console.log("App is listening on port " + PORT);
});

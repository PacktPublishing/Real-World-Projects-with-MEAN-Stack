const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const config = require('./config');
const authenticate = require('./authenticate');

const User = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoURL,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))


app.post('/register', (req, res) => {
  const newUser = new User({
    name: req.body.fullName,
    email: req.body.email,
  })
  newUser.password = newUser.generateHash(req.body.password);
  newUser.save().then(rec => {
    res.status(201).json(rec)
  })
})

app.post('/login', (req, res) => {
  User.findOne({email: req.body.email}).then(loginUser => {
    if(!loginUser) {
      return res.status(401).json({message: 'Invalid username or password'})
    }
    if(!loginUser.validatePassword(req.body.password)) {
      return res.status(401).json({message: 'Invalid username or password'})
    }
    const withTokem = {email: loginUser.email, _id: loginUser._id};
    withTokem.token = loginUser.generateJWT();
    res.status(200).json(withTokem)
  })
})

app.get('/users', authenticate, (req, res) => {
  User.find().then(rec => {
    res.status(200).json(rec)
  })
})



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(3000, () => console.log("Listening on port 3000..."));

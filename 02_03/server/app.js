const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/epicchat', {useNewUrlParser: true})

mongoose.Promise = global.Promise
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))

const Message = require('./models/message')
app.get('/api/chat', (req, res) => {
  Message.find().then(rec => {
    if(rec) {
      res.send(rec)
    } else {
      res.send([])
    }
  })
})
app.post('/api/chat', (req, res) => {
  const newMessage = new Message({
    _id: mongoose.Types.ObjectId(),
    message: req.body.message,
    user: 'user'
  })
  newMessage.save().then(rec => {
    if(rec) {
      res.send(rec)
    } else {
      res.send([])
    }
  })
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})


app.listen(3000, () => console.log('Listening on port 3000...'))
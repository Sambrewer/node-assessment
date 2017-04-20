const express = require('express')
    , bodyParser = require('body-parser')
    , userCtrl = require('./userCtrl');

const app = express();

app.use(bodyParser.json())

app.get('/api/users', (req, res) => {
  res.status(200).send(userCtrl.readAll())
})
app.get('/api/users/:id', (req, res) => {
  res.status(200).send(userCtrl.findUserById(req.params.id))
})

app.get('/api/admins', (req, res) => {
  res.status(200).send(userCtrl.getAdmins());
})

app.get('/api/nonadmins', (req, res) => {
  res.status(200).send(userCtrl.getNonAdmins())
})

app.put('/api/users/:id', (req, res) => {
  res.status(200).send(userCtrl.updateUser(req.params.id, req.body))
})

app.post('/api/users', (req, res) => {
  res.status(200).send(userCtrl.createUser(req.body))
})

app.delete('/api/users/:id', (req, res) => {
  res.status(200).send(userCtrl.removeUser(req.params.id))
})

module.exports = app;

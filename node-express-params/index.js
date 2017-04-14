const express = require('express');
const bodyParser = require('body-parser');

const usersCtrl = require('./controllers/usersCtrl');
const autoCtrl = require('./controllers/autoCtrl');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/get-one-user/:id', usersCtrl.getOneUser);

app.get('/api/auto', autoCtrl.getAuto);


const port = 3333;
app.listen(port, () => {
  console.log('listening on port: ', port);
})

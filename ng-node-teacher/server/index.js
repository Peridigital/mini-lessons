const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./mainCtrl');

const app = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

app.post('/login', mainCtrl.login);






const port = 4000
app.listen(port, ()=> {
  console.log("Listening on port: ", port);
})

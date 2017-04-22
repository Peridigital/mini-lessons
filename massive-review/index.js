const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const config = require('./config');


const app = module.exports =  express();

app.use(bodyParser.json())

const massiveServer = massive.connectSync({
  connectionString: config.connectionString
});

app.set('db', massiveServer);
const db = app.get('db')

const mainCtrl = require('./mainCtrl');

db.create_people((err, response) => {
  console.log('people table init');
})


app.get('/people', mainCtrl.getPeople);

app.post('/people', mainCtrl.newPerson)








app.listen(config.port, () => {
  console.log('Listening on port: ', config.port);
})

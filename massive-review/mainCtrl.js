const app = require('./index');
const db = app.get('db')

module.exports = {

  getPeople(req, res) {
    if (req.query.id) {
      db.get_one([req.query.id], (err, person) => {
        return res.status(200).send(person)
      })
    }


    db.get_people((err, people) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).send(people)
      }
    })
  },

  newPerson(req, res) {
    db.new_person([ req.body.name ], (err, response) => {
      res.status(200).send(response[0])
    })
  }
}

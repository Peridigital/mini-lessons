const cars = require('./../autos');

module.exports = {

  getAuto( req, res ) {
    console.log(req.query);
    if (req.query.auto === 'mater') {
      return res.status(200).send(cars[0]);
    } else if (req.query.auto === 'lightning') {
      return res.status(200).send(cars[1]);
    }
    res.status(404).send('Chris is gonna master this stuff.')
  }
}

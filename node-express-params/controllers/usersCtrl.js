const users = require('./../users');

module.exports = {

    getUsers( req, res ) {
      res.status(200).send( { users: users } );
    },

    getOneUser( req, res ) {
      for (var i = 0; i < users.length; i++) {
        if ( parseInt(req.params.id) === users[i].id ) {
          return res.status(200).send( { user: [ users[i] ] } );
        }
      }
      return res.status(404).json('User not found.');
    }
}

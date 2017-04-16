const info = {
  username: 'batcave',
  password: 'alfred',
  name: 'Bruce Wayne',
  age: '30',
  friends: ['superman', 'flash', 'wonderwoman', 'green arrow']
}

module.exports = {
  login(req, res) {
    let b = req.body;
    if (b.password === info.password && b.username === info.username) {
      res.status(200).send(info)
    } else {
      res.status(401).send('username and password do not match!')
    }
  }
}

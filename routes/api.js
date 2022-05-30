var express = require('express');
var router = express.Router();
const db = require('../queries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>This is official documentation for my management system</h1>'+`<p>${process.env.DATABASE_URL}</p>`);
});

router.get('/example', function(req, res, next) {
  res.json({'name': 'example', 'id': 1});
});

router.get('/number/:number', function(req, res, next) {
  if(typeof +req.params.number === 'number') {
    res.json({'number': +req.params.number});
  } else {
    res.send('<p>Only numbers!</p>')
  }
});

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router;

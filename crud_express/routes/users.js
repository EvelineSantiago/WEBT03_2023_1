var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

var user = {
  email: "evelinesantiago@gmail.com",
  passoword: "123456"
}

router.get('/', function (req, res, next) {
  res.json({users: [{nome: 'Veveta'}]})
})

router.post('/login', function (req, res, next) {
  if (req.body.email == user.email && req.body.password == user.password) {
    res.status(200).json({status: true})
  } else {
    res.status(401).json({status: false})
  }
})

module.exports = router;

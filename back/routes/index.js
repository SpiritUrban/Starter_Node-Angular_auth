var express = require('express');
var router = express.Router();
const User = require('../models/user')

const guard = (req, res, next) => {
  console.log(req.token)
  if (req.token == '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**********************') next()
  else res.json('unauthorized')
}




// var jwt = require('express-jwt');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/v1/auth/register', async (req, res) => {
  const { userName, email } = req.body;
  // test userdata
  if (!(userName && email)) return res.json({ ok: false, msg: 'Uncorrect user data!' });
  // test in db
  const userByName = await User.findOne({userName});
  const userByEmail = await User.findOne({email});
  if (userByName) return res.json({ ok: false, msg: 'Username is revoked!'});
  if (userByEmail) return res.json({ ok: false, msg: 'Email is revoked!' });
  // if ok
  const newUser = new User({ userName, email });
  newUser.save()
  res.json({ ok: true, msg: 'User created!' });
})

router.get('/api/v1/all-data', [guard], (req, res) => {
  const result = {
    ok: true
  }
  res.json(result)
})

module.exports = router;

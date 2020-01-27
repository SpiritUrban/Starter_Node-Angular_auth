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
  const { userName, email, password } = req.body;
  // test userdata
  if (!(userName && email && password)) return res.json({ ok: false, msg: 'Uncorrect user data!' });
  // test in db
  const userByName = await User.findOne({userName});
  const userByEmail = await User.findOne({email});
  if (userByName) return res.json({ ok: false, msg: 'Username is revoked!'});
  if (userByEmail) return res.json({ ok: false, msg: 'Email is revoked!' });
  // if ok
  const newUser = new User({ userName, email, password });
  newUser.save()
  res.json({ ok: true, msg: 'User created!' });
})


router.post('/api/v1/auth/login', async (req, res) => {
  const { userName, email, password } = req.body;
  // test userdata
  if (!(userName && password)) return res.json({ ok: false, msg: 'Uncorrect user data!' });
  // test in db
  const user = await User.findOne({userName});
  // const userByEmail = await User.findOne({email}); // for name or email
  if (!user) return res.json({ ok: false, msg: 'User not found!'});
  // if (userByEmail) return res.json({ ok: false, msg: 'Email is revoked!' });
  // if ok
  const token = newToken()
  await User.findOneAndUpdate({userName},{token})
  if (user.password == password) return res.json({ ok: true, msg: 'User loged!', token });

  res.json({ ok: false, msg: 'User not loged!' });
})


router.get('/api/v1/all-data', [guard], (req, res) => {
  const result = {
    ok: true
  }
  res.json(result)
})

function newToken(){
  let token = '';
  const chars = '1234567890qwertyuiopasdfghjklzxcvbnm'
  for (let i=0; i<20; i++ ) {
    const i = Math.round(Math.random()*35);
    token += chars[i]
  }
  return token
}

module.exports = router;

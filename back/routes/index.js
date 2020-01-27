var express = require('express');
var router = express.Router();

const guard = (req, res, next) => {
  console.log(req.token)
  if (req.token == '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**********************') next()
  else res.json('unauthorized')
}



// var jwt = require('express-jwt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/v1/auth/register', (req, res)=>{
  const result = {
    ok: true
  }
  res.json(result)
})

router.get('/api/v1/all-data', [guard], (req, res)=>{
  const result = {
    ok: true
  }
  res.json(result)
})

module.exports = router;

var express = require('express');
var router = express.Router();

// var jwt = require('express-jwt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/v1/auth/register', (req, res)=>{
  console.log(req.jwt, req.token)
  const result = {
    ok: true,
    // token: jwt.getToken()
  }
  res.json(result)
})


module.exports = router;

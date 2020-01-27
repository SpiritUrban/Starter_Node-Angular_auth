var express = require('express');
var router = express.Router();

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


module.exports = router;

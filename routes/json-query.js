var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    
    res.send("json query <br/> get => " + req.query.s);
});

module.exports = router;

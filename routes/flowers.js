var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var flowers = new Array(30).fill().map((e,i) => {
    return { id: i,  title: "Rose " + i, url: "https://www.flowersngarden.com/imagens/bd/rosa0"+String(i).padStart(2, '0')+".jpg", description: "Beatifull on the garden", color: "Red", size: 20 }
 });
  res.end(JSON.stringify(flowers));
});


router.get('/:id', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var id = req.params.id
  var flower = { id,  title: "Rose " + id, url: "https://www.flowersngarden.com/imagens/bd/rosa0"+String(id).padStart(2, '0')+".jpg", description: "Beatifull on the garden", color: "Red", size: 20 }
  res.end(JSON.stringify(flower));
});

module.exports = router;

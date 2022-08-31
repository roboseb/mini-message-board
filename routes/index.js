var express = require('express');
var router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
 ];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('form', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body.nameinput);

    messages.push({text: req.body.textinput, user: req.body.nameinput, added: new Date()});

    //res.send(req.body.nameinput);
    res.redirect('/')

    const test = 0;
});



module.exports = router;

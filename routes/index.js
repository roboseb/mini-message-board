var express = require('express');
var router = express.Router();

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

const aDay = 24*60*60*1000;

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: `${timeSince(new Date(Date.now()-aDay/3))} ago`
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: `${timeSince(new Date(Date.now()-aDay*0.6))} ago`
    }
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function (req, res, next) {
    res.render('form', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function (req, res) {
    console.log('receiving data ...');
    console.log('body is ', req.body.nameinput);

    messages.push({ text: req.body.textinput, user: req.body.nameinput, added: `${timeSince(new Date(Date.now()))} ago` });

    //res.send(req.body.nameinput);
    res.redirect('/')

    const test = 0;
});


module.exports = router;

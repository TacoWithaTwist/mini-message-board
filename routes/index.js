var express = require('express');
var router = express.Router();
var messages = [
  { text: 'hello', user: 'bronzo', added: new Date() },
  { text: 'dang', user: 'josh', added: new Date() },
  { text: 'boombastic', user: 'american express', added: new Date() },
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Add New Message to the Mini Message Board' });
});
router.post('/new', function (req, res, next) {
  messageText = req.body.messageText;
  userName = req.body.userName;
  messages.push({ text: messageText, user: userName, added: new Date() });
  res.redirect('/');
});
module.exports = router;

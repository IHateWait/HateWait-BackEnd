const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Nodejs 웹 서버(Port 3000)에서 보내는 메시지')
});

module.exports = router;
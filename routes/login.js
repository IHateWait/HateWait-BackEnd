const express = require('express');
const router = express.Router();

// Local authentication
// 로그인 실패시 로그인 화면으로 이동.
router.post('/', passport.authenticate('local-login',
    {successRedirect : '/', failureRedirect : '/login', failureFlash : true}),
    function(request, response) {
    //로그인 이후 메인 페이지로 이동.
    response.json('login-trying is completed!');
});

// failureFlash: passport가 strategy verify callback에 의해 정의된 에러 메시지를 flash하게 하는 옵션.
// 오류의 원인을 출력해줄 수 있게한다.

module.exports = router;

const router  = require('express').Router();
const Auth    = require('../controllers/auth');
const AuthMid = require('../middleware/auth');

router.post('/register',   Auth.Register);
router.post('/login',      Auth.Login);
router.post('/verifyUser', AuthMid.verifyUser)

module.exports = router;

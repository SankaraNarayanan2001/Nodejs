const router = require('express').Router();

const getLogic=require('../controllers/logic')

//signup
router.post('/signup', getLogic.signUp)

//login
router.post('/login', getLogic.login);

module.exports = router;
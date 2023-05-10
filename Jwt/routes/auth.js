const router=require('express').Router();
const authcontroller=require('../controllers/authcontroller')

//signup
router.post('/signup',authcontroller.signup)

 router.post('/login',authcontroller.login)

 router.get('/all',authcontroller.all)

module.exports=router;
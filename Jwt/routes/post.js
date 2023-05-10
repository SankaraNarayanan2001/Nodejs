const router=require('express').Router();
const private=require('../controllers/postcontroller')
const check=require('../middleware/check');

router.get('/private',check,private.private)

module.exports=router;
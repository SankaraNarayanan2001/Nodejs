const router=require('express').Router();

const update=require('../Controllers/contupdate')

const check=require('../middleware/check');



router.post('/update-user/:id',check.checkcheck,update.change)

module.exports=router;
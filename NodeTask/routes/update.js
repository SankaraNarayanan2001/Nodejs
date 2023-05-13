const router=require('express').Router();
const update=require('../Controllers/contupdate')
const check=require('../middleware/check');
router.put('/update/:email',check.check,update.update)

module.exports=router;
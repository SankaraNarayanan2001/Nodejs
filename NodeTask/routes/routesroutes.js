const router=require('express').Router();


const controutes=require('../Controllers/controutes')

router.post("/signup",controutes.signup);

router.get("/login",controutes.login)

// router.put("/update",controutes.update)

router.delete("/delete/:email",controutes.delete);

module.exports=router;
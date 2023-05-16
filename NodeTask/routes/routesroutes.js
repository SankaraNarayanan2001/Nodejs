const router = require('express').Router();


const controutes = require('../Controllers/controutes')

router.post("/signup", controutes.signup);

router.get("/login", controutes.login)

router.delete("/delete/:id", controutes.delete);

router.get('/all', controutes.all)

module.exports = router;
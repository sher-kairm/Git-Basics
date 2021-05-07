const router  = require("express").Router();

router.get("/ping",(req, res)=> {
    res.send("pong");
});

router.get("/ping", (req, res)=> {
    const request = req.body;
});
module.exports = router;
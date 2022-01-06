const express = require('express') 
const router = express.Router()

router.get("/", (req,res) => {
    res.send("Zilles Human Route")
})

module.exports = router
const express = require('express') 
const router = express.Router()

const zillesHuman = require('./collectionsRoutes/zillesHuman')

router.get("/", (req,res) => {
    res.send("collections route")
})

router.use("/zillesHuman", zillesHuman)

module.exports = router
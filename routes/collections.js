const express = require('express') 
const router = express.Router()

const zillesHuman = require('./collectionsRoutes/zillesHuman')
const zillesAnimal = require('./collectionsRoutes/zillesAnimal')
const stephan = require('./collectionsRoutes/stephan')

router.get("/", (req,res) => {
    res.send("collections route")
})

router.use("/zillesHuman", zillesHuman)
router.use("/zillesAnimal", zillesAnimal)
router.use("/stephan", stephan)

module.exports = router
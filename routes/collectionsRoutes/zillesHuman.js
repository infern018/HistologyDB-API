const express = require('express') 
const router = express.Router()
const zillesHuman = require('../../models/zillesHuman')

router.get("/", async (req,res) => {
    let zillesHumanData = await zillesHuman.find();

    if(req.query){
        zillesHumanData = await zillesHuman.find(req.query)
    }

    res.json(zillesHumanData);
})

module.exports = router
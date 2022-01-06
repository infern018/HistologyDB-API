const express = require("express");
const stephan = require("../../models/stephan");
const router = express.Router();

router.get("/", async (req,res) => {
    let stephanData = await stephan.find();
   
    if(req.query){
        stephanData =  await stephan.find(req.query)
    }

    res.json(stephanData);
})

module.exports = router
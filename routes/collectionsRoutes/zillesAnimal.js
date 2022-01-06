const express = require('express') 
const router = express.Router()
const zillesAnimal = require('../../models/zillesAnimal')

router.get("/", async (req,res) => {
    let zillesAnimalData = await zillesAnimal.find();

    if(req.query){
      zillesAnimalData = await zillesAnimal.find(req.query);  
    }

    res.json(zillesAnimalData);
})

module.exports = router
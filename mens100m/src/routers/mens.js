const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")
router.post("/mens", async (req, res)=> {
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        // handling promise data so need to write with await 
       const insertMens = await addingMensRecords.save();
       //when post request to the server status code must be 201
       res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})


router.get("/mens", async (req, res)=> {
    try{
        const mens100list = await MensRanking.find().sort({"ranking": 1});
        res.send(mens100list);
    }catch(e){
        res.send(e);
    }
})

// we will handle get req of indiv
router.get("/mens/:id", async (req, res)=> {
    try{
        const _id = req.params.id;
        const getMens = await MensRanking.findById(_id);
        res.send(getMens);
    }catch(e){
        res.send(e);
    }
})

router.patch("/mens/:id", async(req, res)=> {
    try{
        const _id = req.params.id;
        const patchMens = await MensRanking.findByIdAndUpdate(_id, req.body,{
            new: true
        });
        res.status(201).send(patchMens);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/mens/:id", async(req, res)=> {
    try{
        const patchMens = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(201).send(patchMens);
    }catch(e){
        res.status(500).send(e);
    }
})


module.exports = router;
const express = require("express");
const Student = require("../models/students")
//1: create a new router
const router = new express.Router();

 //2: we need to define the router
router.get("/awal", (req, res)=> {
    res.send("Heelo everybody");
})

router.post("/students", async (req, res)=> {
    try{
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

//read the data from registered students
router.get("/students", async (req, res)=> {
    try{
       const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// get the individual student data using id\
router.get("/students/:id", async(req, res)=> {
    try{
        const _id = req.params.id;
        // console.log(req.params.id);
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/students/:id", async(req, res)=> {
    try{
        const _id = req.params.id;
       const deleteStudent = await Student.findByIdAndDelete(req.params.id);
       if(!req.params.id){
        return res.status(400).send();
       }
       res.send(deleteStudent);
    }catch(e){
        res.status(500).send();
    }
})

router.patch("/students/:id", async(req, res)=> {
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e);
    }
})
module.exports = router;
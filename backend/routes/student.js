const express = require("express");

const router = express.Router();

const Student = require("../models/student");

//test
router.get("/test",(req,res)=>res.send("Student routes working"));

router.post("/",(req,res) =>{
    Student.create(req.body).then(()=>res.json({msg:"Student added successfully"})).catch(()=>res.status(400).json({msg:"Student adding fail"}));
});


router.get("/" ,(req,res) =>{
    Student.find().then((student)=>res.json(student)).catch(()=>res.status(400).json({msg:"NO Student foud"}));
});

router.get("/:id" ,(req,res) =>{
    Student.findById(req.params.id).then((student)=>res.json(student)).catch(()=>res.status(400).json({msg:"cannot find this supplier"}));
});

router.put("/:id", (req,res)=> {
    Student.findByIdAndUpdate(req.params.id,req.body).then(()=>
        res.json({msg : "Upadate succefully"})).catch(()=>res.status(400).json({msg:"Update failed"}))
    ;
});

    router.delete("/:id", (req, res) => {
        Student.findByIdAndDelete(req.params.id)
            .then(() => {
                res.json({ msg: "Deleted Successfully" });
            })
            .catch(() => {
                res.status(400).json({ msg: "Cannot be deleted" });
            });
    
    
});

  






  
  module.exports = router;
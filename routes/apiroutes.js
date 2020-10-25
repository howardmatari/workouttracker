var express = require('express');
var router = express.Router();
var Workout = require("../models/workout")

router.post("/api/workouts", function(req, res){
    Workout.create({}).then(dbWorkout => res.json(dbWorkout))
})


router.get("/api/workouts/range",function(req,res){  
    Workout.find()
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});


router.post("/api/workouts/range",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

router.put("/api/workouts/:id",({body,params},res)=>{   
    Workout.findByIdAndUpdate(  
     params.id,
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

module.exports=router;

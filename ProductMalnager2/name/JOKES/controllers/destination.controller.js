const Destination = require('../models/destination.model')



// test api
module.exports.apiTest = (req,res)=>{
    res.json({message: 'ok'})
}

// alll
module.exports.allDest = (req,res)=>{
    Destination.find()
    .then(destList => res.json(destList))
    .catch(err=>res.json(err))
    
}



// one
module.exports.oneDest = (req,res)=>{
    Destination.findOne({_id: req.params.id})
        .then(foundDest => res.json(foundDest))
        .catch(err=>res.json(err))

}


// create
module.exports.createDest = (req,res)=>{
    Destination.create(req.body) //return the created object
    .then(newDest => res.json(newDest))
    .catch(err=>res.json(err))
}


// update
module.exports.updateDest = (req,res)=>{
    Destination.findOneAndUpdate(

        // criteria 
        {_id: req.params.id}, 
        req.body, //formData to update
        {new: true, runValidators:true}
        // new:true return the updated object
        //run validator to perform validation specified in model
    )
        .then(updatedDest => res.json(updatedDest))
        .catch(err=>res.json(err))
}




// delete
module.exports.deleteDest = (req,res)=>{
    Destination.deleteOne({_id: req.params.id})
    .then(status=> res.json(status))
    .catch(err=>res.json(err))
}
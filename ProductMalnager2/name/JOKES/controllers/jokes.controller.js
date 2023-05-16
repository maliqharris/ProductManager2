const Jokes = require('../models/jokes.model')






module.exports.apiTest2 = (req,res)=>{
    res.json({message: 'ok'})
}


// alll
module.exports.allJokes = (req,res)=>{
    Jokes.find()
    .then(jokeList => res.json(jokeList))
    .catch(err=>res.json(err)) 
}

// one
module.exports.oneJoke = (req,res)=>{
    Jokes.findOne({_id: req.params.id})
        .then(foundJoke => res.json(foundJoke))
        .catch(err=>res.json(err))

}

// create
module.exports.createJoke = (req,res)=>{
    Jokes.create(req.body) //return the created object
    .then(newJoke => res.json(newJoke))
    .catch(err=>res.json(err))
}
module.exports.updateJoke = (req,res)=>{
    Jokes.findOneAndUpdate(

        // criteria 
        {_id: req.params.id}, 
        req.body, //formData to update
        {new: true, runValidators:true}
        // new:true return the updated object
        //run validator to perform validation specified in model
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err=>res.json(err))
}


// delete
module.exports.deleteJoke = (req,res)=>{
    Jokes.deleteOne({_id: req.params.id})
    .then(status=> res.json(status))
    .catch(err=>res.json(err))
}
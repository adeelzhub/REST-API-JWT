const{Cat} = require("../model");


exports.addBreed = async(req, res)=>{
    try{
        console.log("addBreed invoked")
        const cat = new Cat(req.body);
        await cat.save();
        res.status(200).send({message:"Successfully Added"});
    }catch(error){
        res.status(501).send({err: error});
    }
};
exports.listCats = async(req, res)=>{
    try{
        const catList = await Cat.find({});
        res.status(200).send(catList);
    }catch(error){
        res.status(505).send(error);
    }
};
exports.findCat = async(req, res)=>{
    try{
        const catExists = await Cat.exists({breed: req.params.breed});
        if(catExists){
            const cat = await Cat.findOne({breed: req.params.breed});
            res.status(200).send(cat);
        }else{
            res.status(201).send({message: "No record found"});
        }
        
    }catch(error){
        res.status(503).send(error);
    }
};
exports.updateCat = async (req, res)=>{
    try{
        if(req.body.numbers){
            await Cat.updateOne({breed: req.body.breed},{$set:{numbers: req.body.numbers}})
            res.status(200).send("Numbers available updated Successfully")
        }else if(req.body.adoptionCost){
            await Cat.updateOne({breed: req.body.breed},{$set:{adoptionCost: req.body.adoptionCost}})
            res.status(200).send("Adoption cost updated Successfully")
        }
        
    }catch(error){
        res.status(500).send(error);
    }
};

exports.deleteCat = async(req, res)=>{
    try{
        await Cat.deleteOne({breed: req.params.breed});
        res.status(200).send("Deleted Successfully");
    }catch(error){
       res.status(500).send(error);
    }
};
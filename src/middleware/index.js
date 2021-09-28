const {User} = require("../model")
const bcrypt = require("bcryptjs");

exports.hashPassword = async (req, res, next)=>{
    try{
        if(req.body.password){
            // console.log("This is line 7 middleware/index")
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
        next();
    }catch(error){
        res.status(500).send(error);
    }
};
exports.deHashPassword = async (req, res, next)=>{
    try{
        console.log("deHashPassword middleware invoked")
        const user = await User.findOne({username: req.body.username});
        console.log(user)
        passwordMatched = await bcrypt.compare(req.body.password, user.password)
        passwordMatched?next():res.send("Invalid Password")
        
    }catch(error){
        res.status(500).send(error);
    }
};

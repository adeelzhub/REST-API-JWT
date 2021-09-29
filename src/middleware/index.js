const User = require("../user/user.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

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
        const user = await User.findOne({username: req.body.username});
        passwordMatched = await bcrypt.compare(req.body.password, user.password)
        passwordMatched?next():res.send("Invalid Password")
        
    }catch(error){
        res.status(500).send(error);
    }
};
exports.createToken = (req, res, next)=>{
    try{
        const token = jwt.sign({email: req.body.email}, process.env.SECRET);
        req.token = token;
        next();
    }catch(error){
        res.status(500).send(error);

    }
};
exports.decodeToken = async(req, res, next)=>{
    try{  
        const token = req.header("Authorization").replace("Bearer ","");
        const decodedToken = jwt.verify(token, process.env.SECRET);       
        const user = await User.findOne({email: decodedToken.email});
        req.user = user;
        console.log(decodedToken);
        next();
    }catch(error){
        res.status(500).send(error);
    }
}

const User = require("./user.model");
// const bcrypt = require("bcryptjs");

exports.addUser = async(req, res) =>{
    try{
        const user = new User(req.body);
        await user.save()
        res.status(200).send({user, token: req.token, message: "User added the database"});
    }catch(error){
        res.status(500).send(error);
    }
};
exports.loginUser = async(req, res) =>{
    try{
        const theUser = await User.findOne({username: req.body.username})
        res.status(200).send({theUser,token: req.token, message: "Login Successfull"});
    }catch(error){
        res.status(500).send(error);
    }
};
exports.listUsers = async(req, res) =>{
    try{
        const usersList = await User.find({});
        res.status(200).send(usersList);
    }catch(error){
        res.status(500).send(error);
    }
};
exports.updateUser = async(req, res) =>{
    try{
        res.status(200).send();
    }catch(error){
        res.status(500).send(error);
    }
};
exports.deleteUser = async(req, res) =>{
    try{
        const findUser = await User.findOne({username: req.params.name})
        if(findUser){
            await User.deleteOne({username: req.params.name})
            res.status(200).send("deleted successfully");
        }else{
            res.status(222).send("User does not exist")
        }
    }catch(error){
        res.status(500).send(error);
    }
};
exports.tokenLogin = (req, res)=>{
    try{
        res.status(200).send(req.user)
    }catch(error){
        res.status(500).send(error);
    }
};
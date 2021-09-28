const{User} = require("./user.model");
const bcrypt = require("bcryptjs");

exports.addUser = async(req, res) =>{
    try{
        console.log("add user function invoked")
        const user = new User(req.body);
        await user.save()
        res.status(200).send("User added the database");
    }catch(error){
        res.status(500).send(error);
    }
};
exports.loginUser = async(req, res) =>{
    try{
        res.status(200).send("Login Successfull");
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
        res.status(200).send();
    }catch(error){
        res.status(500).send(error);
    }
};
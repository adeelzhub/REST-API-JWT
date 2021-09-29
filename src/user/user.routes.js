const {Router} = require("express")
const userRouter = Router();


const { hashPassword, deHashPassword, createToken, decodeToken } = require("../middleware");
const { addUser, loginUser, deleteUser, updateUser, listUsers, deleteAll, tokenLogin } = require("../user/user.controllers");


userRouter.post("/user", hashPassword,createToken ,addUser);
userRouter.get("/users", listUsers);
userRouter.post("/user/login",deHashPassword, createToken, loginUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:name", deleteUser);
userRouter.get("/user/token", decodeToken, tokenLogin);


module.exports = userRouter;
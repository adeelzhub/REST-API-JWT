const {Router} = require("express")
const userRouter = Router();


const { hashPassword, deHashPassword } = require("../middleware");
const { addUser, loginUser, deleteUser, updateUser, listUsers } = require("../user/user.controllers");


userRouter.post("/user", hashPassword, addUser);
userRouter.get("/users", listUsers);
userRouter.post("/user/login",deHashPassword, loginUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:email",deHashPassword, deleteUser);


module.exports = userRouter;
require("./db/connection")
const express = require("express");
const cors = require("cors")
const userRouter = require("./user/user.routes")
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(cors)



app.listen(3000,()=>{
    console.log("Listening on port 3000");
});

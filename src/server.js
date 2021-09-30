require("./db/connection")
const express = require("express");
const cors = require("cors")
const port = process.env.PORT || 5001

const userRouter = require("./user/user.routes")
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(cors());



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

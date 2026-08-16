require("dotenv").config();
const express = require("express")
const connectedDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const app = express();
const cookieParser = require("cookie-parser")

 
const PORT = config.port
connectedDB();

app.use(express.json());
app.use(cookieParser())
//root Endpoint
app.get("/", (req,res)=>{

    res.json({message: "hello from new server"})
})

// Other Endpoints

app.use("/api/user", require("./routes/userRoute"))
app.use("/api/order", require("./routes/orderRoute"))
app.use("/api/tables", require("./routes/tableRoute"))

// Global error Handler
app.use(globalErrorHandler)

// Server
app.listen(PORT, ()=>{
    console.log(`POS server is listening on ${PORT}`)
})
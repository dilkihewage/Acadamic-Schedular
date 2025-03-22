const express = require("express");
const dbConnection = require("./config/db");
const routes = require("./routes/student");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors({ origin: true, credentials:true}));

//DB connection
dbConnection();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>res.send("Heloo server is running"));
app.use("/api/student",routes)



const PORT  = 5000;

app.listen(PORT,()=>console.log('server is running on PORT ${PORT}'));
const express = require("express")
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors")

app.use(cors());


const Port = process.env.PORT || 5000 ;
app.get('/', (req, res) => {
    res.send(`Server connected on port ${Port}`)
})


const URL = process.env.URL;
mongoose.connect(URL, {
    useNewUrlParser :true,
    useUnifiedTopology:true,
} )

const db = mongoose.connection;
db.on("open", ()=>{
    console.log("Connected to database MongoDB")
})

app.listen(Port, () => console.log(`Server connecter on port ${Port}`));

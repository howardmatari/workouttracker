const express = require("express");
const mongojs = require("mongojs");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

const databaseUrl = "workout";
const collections = ["exercise"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
    console.log("Database Error", error);
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
});

const apiroutes=require("./routes/apiroutes");
const viewroutes=require("./routes/viewroutes");

app.use (apiroutes);
app.use (viewroutes);

app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});
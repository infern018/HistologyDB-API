const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//importing routes
const collectionsRoutes = require('./routes/collections')

//Port number
const PORT = 7000



//Database

const mongoURL = "mongodb://localhost:27017"

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.once('open',() => {
    console.log("Connected to mongoDB")
    console.log(db.collections);
})

//Middleware
app.use(bodyParser.json());

//Routes
app.get("/", (req,res) => {
    res.send("Konichiwa")
})

app.use("/collections", collectionsRoutes)

app.listen(PORT, () => {
    console.log("Server started on port "+PORT);
})
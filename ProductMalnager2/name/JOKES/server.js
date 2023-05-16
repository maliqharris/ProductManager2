require('dotenv').config();

// import dependancies
const cors = require('cors');
const express = require('express');
const app = express();
require("./config/mongoose.config")
// console.log(process.env.ATLAS_USERNAME)

// config express

app.use(cors())
app.use(express.json() );
app.use( express.urlencoded({extended: true }));


// routes and conroller logic CRUD
const Router = require("./routes/jokes.routes");
Router(app);


// listen on port!
app.listen(8008, ()=>console.log(`Listening to the port: 8008`));

const express = require('express')
const app = express();

const connectDB = require('./db');

connectDB();

app.use(express.json());

app.use('/', require('./routes/user.route') )

app.listen(3000, ()=>{
    console.log("Server connected")
});
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { config } = require("dotenv");
config({path: './.env'});

const app = express();

app.use(bodyParser.json());

app.get("/home", (req, res)=> {
    res.json({message: "OK"});
});

connectDB();

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

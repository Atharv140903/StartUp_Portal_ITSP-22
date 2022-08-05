const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const startupRoute = require("./routes/startup");
const blogRoute = require("./routes/blog");
var cors = require('cors');

app.use(cors()) // Use this after the variable declaration

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(() => 
            console.log("DB connection successfull!"))
        .catch((err) => {
            console.log(err);
        }
);

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/startups', startupRoute);
app.use('/api/blogs',  blogRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});
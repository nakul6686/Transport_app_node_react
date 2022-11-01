const express = require("express");
const app = express();
const mongoose =  require('mongoose');
const dotenv = require("dotenv");
// Import routes
const transportarRoutes = require("./routes/transportar/transportar")

// Port 
const port = process.env.PORT || 5000 ;

// config dotenv 
dotenv.config();

// connect to DB

const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE,
        {
          // useNewUrlParser: true,
          // useFindAndModify: false,
          // useUnifiedTopology: true
        }
      );
      console.log("connected to database")
      } catch (error) {
        console.log(error)
      }
}


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// define routes
app.use("/api/transportar", transportarRoutes)


app.listen(port, ()=>{
    connectToDb();
    console.log("App started..YEY port: " , port)
})
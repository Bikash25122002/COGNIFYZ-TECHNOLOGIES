require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT||5000;

mongoose.connect(process.env.DB_URL);
const db=mongoose.connection;
db.on("error",(e)=>{
  console.log(e);
})
db.once('open',()=>{
  console.log("Connected to Database");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
  credentials: true, 
}
app.use(cors(corsOptions))
app.use(cookieParser())


app.use('', require("./routes/user_routes"));

app.listen(port, () => {
  console.log("Server is running at http://localhost:3000");
});
const express=require('express')
const app=express()
const port=3000;


app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('', require("./routes/user_route"));

app.listen(port, ()=>{
  console.log("Server is running at http://localhost:3000");
});
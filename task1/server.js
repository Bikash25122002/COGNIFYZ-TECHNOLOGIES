const express=require('express')
const app=express()
const port=3000;


app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/',(req,res)=>{
    const {name,email,age,message}=req.body;
    console.log(req.body);
    res.send('Form submitted successfully!');
})

app.listen(port, ()=>{
  console.log("Server is running at http://localhost:3000");
});
const express=require("express")
const app=express()
const PORT=3000

app.use(express.json())
app.post("/register",(req,res)=>{

     console.log(req.body)

    res.send("User Registered");
})

app.listen(PORT, ()=>{
    console.log("Server Started");
})
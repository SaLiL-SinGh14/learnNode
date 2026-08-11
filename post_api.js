// const express=require("express")
// const app=express()
// const PORT=3000

// app.use(express.json())
// app.post("/register",(req,res)=>{

//      console.log(req.body)

//     res.send("User Registered");
// })

// app.listen(PORT, ()=>{
//     console.log("Server Started");
// })

// const express=require("express")
// const app=express()
// const PORT=3000

// app.use(express.json())
// app.post("/register",(req,res)=>{

//      console.log(req.body.name)
//      console.log(req.body.age)

//     res.send("User Registered");
// })

// app.listen(PORT, ()=>{
//     console.log("Server Started");
// })

// const express=require("express")
// const app=express()
// const PORT=3000

// app.use(express.json())
// const users=[]

// app.post("/register",(req,res)=>{
//     const user=req.body
//     users.push(user)
//     res.send("User Registered")
//     console.log(users)
    
// })


// app.listen(PORT,()=>{
//     console.log("Server Started");
// })

//...... use of GET and POST together....
const express=require("express")
const app=express()
const PORT=3000

app.use(express.json())

const users=[]
//post
app.post("/register",(req,res)=>{
    const user=req.body
    users.push(user)
    res.send("USER REGISTERED")
})
//get
app.get("/users",(req,res)=>{
    res.json(users)
    console.log(users)
})
app.listen(PORT,()=>{
    console.log("SERVER RUNNING")
})
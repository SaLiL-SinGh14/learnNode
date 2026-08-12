const express=require("express")
const app=express()
const PORT=3000

app.use(express.json())

const users=[]

app.post("/register",(req,res)=>{
    const user={
        id: users.length+1,
        ...req.body//means just spread/copy all the properties of this object as it is
    }
    users.push(user)
    res.send("User Registered")
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id)

    const user=users.find(u=>u.id===id)

    res.json(user)
})
//this code will give the user of specific id 
app.listen(PORT,()=>{
    console.log("Server Started");
})
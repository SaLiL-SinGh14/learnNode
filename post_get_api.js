// const express = require("express")
// const app = express()
// const PORT = 3000

// app.use(express.json())

// const users = []

// app.post("/register", (req, res) => {
//     const user = {
//         id: users.length + 1,
//         ...req.body//means just spread/copy all the properties of this object as it is
//     }
//     users.push(user)
//     res.send("User Registered")
// })

// app.get("/users", (req, res) => {
//     res.json(users)
// })

// app.get("/users/:id", (req, res) => {
//     const id = Number(req.params.id)

//     const user = users.find(u => u.id === id)

//     res.json(user)
// })
// //this code will give the user of specific id 
// app.listen(PORT, () => {
//     console.log("Server Started");
// })
//.......................................................................
////what if user is not found in the array , so we will use res.status along with the msg 
// const express = require("express")
// const app = express()
// const PORT = 3000

// app.use(express.json())

// const users = []

// app.post("/register", (req, res) => {
//     const user = {
//         id: users.length + 1,
//         ...req.body//means just spread/copy all the properties of this object as it is
//     }
//     users.push(user)
//     res.status(201).send(user)
// })

// app.get("/users", (req, res) => {
//     res.json(users)
// })

// app.get("/users/:id", (req, res) => {
//     const id = Number(req.params.id)

//     const user = users.find(u => u.id === id)

//     if(!user){
//         return res.status(404).send("User not found");
//     }

//     res.json(user)
// })
// //this code will give the user of specific id 
// app.listen(PORT, () => {
//     console.log("Server Started");
// })
//..................................................
//what if we forget to enter the name in json body

const express=require("express")
const app=express()
const PORT=3000

const users=[]

app.use(express.json())

app.post("/register",(req,res)=>{
    if(!req.body.name || req.body.name.trim()===""){
        return res.status(400).json({//use of return is mandatory as to stop the function 
            message:"Name is required"
        })
    }
    const user={
        id: users.length+1,
        ...req.body
        //if we enter name in body as " Salil " so to avoid getting these whitespaces we use something that is 
        //name: req.body.name.trim() , this will trim the whitespaces and will writeup the clean name as "Salil"
        // and flow will be like req.body pehle name ko object me daalega uske baad trim wale function ko use krke overwrite kr dega , object me 
        //last value win kr jaayegi. 
    }
    users.push(user)
    res.status(201).send("User registered.")
    
})
app.get("/users", (req, res) => {
    res.json(users)
})

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id)

    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).send("User not found");
    }

    res.json(user)
})
//this code will give the user of specific id 
app.listen(PORT, () => {
    console.log("Server Started");
})
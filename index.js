//-----GET api------//

// const express= require("express")

// const app=express()

// const PORT=3000

// app.get("/user",(req,res)=>{
//     res.json({
//         name: "Salil",
//         age: 22,
//         city: "Lucknow"
//     });
// });

// app.listen(PORT,()=>{
//     console.log("Server Started");
// })


//--------req parameters------------//
// const express=require("express")

// const app=express()

// const PORT=3000

// app.get("/user/:id",(req,res)=>{
//             res.send(req.params.id);

// })

// app.listen(PORT,()=>{
// console.log("server started");
// })


//......another example.....
const express=require("express");

const app=express()

const PORT=3000

app.get("/product/:id",(req,res)=>{
    res.send(`Product id is ${req.params.id}`)
})
app.listen(PORT,()=>{
    console.log("started server")
})


//.......another exaample.......//
// const express=require("express")

// const app=express()

// const PORT=3000

// app.get("/book/:bookName",(req,res)=>{
//     res.send(req.params.bookName);
// })
// app.listen(PORT,()=>{
//     console.log("server started");
// })



//.....another example....//
// const express=require("express")

// const app=express()

// const PORT=3000

// const users=[
//     { id:1, name:"salil"},
//     { id:2, name:"salil2"},
//     { id:3, name:"salil3"}
// ]

// app.get("/user/:id",(req,res)=>{

//     const id= Number(req.params.id)

//     const user=users.find(u=> u.id===id)

//     res.send(user.name);

// })

// app.listen(PORT,()=>{
//     console.log("server running");
// })



//..........another example.........//
// const express=require("express")

// const app=express()

// const PORT=3000

// const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mouse", price: 1000 },
//     { id: 3, name: "Keyboard", price: 2000 }
// ];

// app.get("/user/:id",(req,res)=>{

//     const id= Number(req.params.id)

//     const p=products.find(u=> u.id===id)

//     res.send(`The price of ${p.name} is ${p.price} for id ${p.id}`);

// })

// app.listen(PORT,()=>{
//     console.log("server running");
// })


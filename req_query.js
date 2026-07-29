// Req query //

// const express=require("express")

// const app=express()

// const PORT=3000

// app.get("/movie",(req,res)=>{
//     res.send(`Movie ${req.query.name} has rating ${req.query.rating}`)
// })

// app.listen(PORT,()=>{
//     console.log("Server Started")
// })


//another example//

// const express=require("express")
// const app=express()
// const PORT=3000

// app.get("/student/:id",(req,res)=>{
//     res.send(`Student ${req.query.name} whose roll number is ${req.params.id} is studying ${req.query.course}`)
// })

// app.listen(PORT,()=>{
//         console.log("Server Started")
//     })

// http://localhost:3000/student/101?name=Salil&course=CSE

//another example//

// const express=require("express")
// const app=express()
// const PORT=3000

// const products = [
//     { id: 1, name: "Laptop", category: "Electronics" },
//     { id: 2, name: "Mouse", category: "Electronics" },
//     { id: 3, name: "T-Shirt", category: "Clothing" }
// ];

// app.get("/products",(req,res)=>{

//     const chosenCategory=req.query.category

//     const filteredProducts=products.filter(p=>p.category===chosenCategory)
//     res.json(filteredProducts)
// })
// app.listen(PORT,()=>{
//             console.log("Server Started")
//         })
// http://localhost:3000/products?category=Electronics
// ......will print the electronics products 


//practise question//
// const express=require("express")
// const app=express()
// const PORT=3000

// app.get("/search",(req,res)=>{
//     res.send(`Hello ${req.query.name} from ${req.query.city}.`)

// })

// app.listen(PORT,()=>{
//     console.log("SERVER taking lead..")
// })
// http://localhost:3000/search?name=Salil&city=Lucknow


// practise question//
// const express = require('express')
// const app = express()

// const PORT = 3000
// const products = [
//     { id: 1, name: "Laptop", category: "Electronics" },
//     { id: 2, name: "Mouse", category: "Electronics" },
//     { id: 3, name: "T-Shirt", category: "Clothing" },
//     { id: 4, name: "Keyboard", category: "Electronics" }
// ];

// app.get("/products", (req, res) => {
//     const chosenCategory = req.query.category

//     const filteredProducts = products.filter(i => i.category === chosenCategory)
//     res.json(filteredProducts)

// })

// app.listen(PORT,()=>{
//     console.log("Running server")
// })
// http://localhost:3000/products?category=Electronics

//practise questions///
// const express = require('express')
// const app = express()

// const PORT = 3000
// const mobiles = [
//     { id: 1, brand: "Samsung", price: 30000 },
//     { id: 2, brand: "Apple", price: 80000 },
//     { id: 3, brand: "Samsung", price: 50000 },
//     { id: 4, brand: "OnePlus", price: 40000 }
// ];

// app.get("/mobiles", (req, res) => {
//     const chosenBrand = req.query.brand

//     const filteredProducts = mobiles.filter(i => i.brand === chosenBrand)
//     res.json(filteredProducts)

// })

// app.listen(PORT, () => {
//     console.log("Running server")
// })
// http://localhost:3000/mobiles?brand=Samsung

//practise questions//
// const express=require('express')
// const app=express()
// const PORT=3000

// const users = [
//     {
//         id: 1,
//         name: "Rahul",
//         age: 22
//     },
//     {
//         id: 2,
//         name: "Salil",
//         age: 23
//     }
// ];

// app.get("/search/:id",(req,res)=>{
//     const newid=Number(req.params.id)
//     const u=users.find(i=>i.id===newid)

//     if(req.query.show==="name"){
//        return res.send(users.name)
//     }
//     if(req.query.show==="age"){
//         return res.send(users.age)
//     }
// })
// app.listen(PORT,()=>{
//     console.log("SERVER");
// })
const express = require("express");

const app = express();

const PORT = 3000;

const users = [
    {
        id: 1,
        name: "Rahul",
        age: 22
    },
    {
        id: 2,
        name: "Salil",
        age: 23
    }
];

app.get("/user/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    // if (!user) {
    //     return res.status(404).send("User not found");
    // }

    if (req.query.show === "name") {
        return res.send(user.name);
    }

    if (req.query.show === "age") {
        return res.send(user.age.toString());
    }

    // res.send("Invalid Query");

});

app.listen(PORT, () => {
    console.log("Server Started");
});
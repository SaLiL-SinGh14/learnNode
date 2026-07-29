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


// practise question
import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";


dotenv.config();
const app= express();

//load product from server
app.get("/api/products",(req,res)=>{
    res.json(products)
});

//unique product from server
app.get("/api/products/:id",(req,res)=>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
});

app.get("/",(req,res)=>{
    res.send("API fontionne");
});

const PORT = process.env.PORT;
app.listen(PORT, console.log("serveur en cours au port 5000..."));
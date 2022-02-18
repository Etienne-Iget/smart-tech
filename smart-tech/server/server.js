import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./dataImport.js";
import productRoute from "./Routes/ProductRoute.js";
import { notFound, errorHandler } from "./Middleware/Errors.js";


dotenv.config();
connectDatabase();
const app= express();

//load product from server
// app.get("/api/products",(req,res)=>{
//     res.json(products)
// });

//unique product from server
// app.get("/api/products/:id",(req,res)=>{
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product)
// });

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use(notFound);
app.use(errorHandler);

// app.get("/",(req,res)=>{
//     res.send("API fontionne");
// });

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`serveur en cours au port ${PORT}`));
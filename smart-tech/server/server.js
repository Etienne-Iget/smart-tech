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

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`serveur en cours au port ${PORT}`));
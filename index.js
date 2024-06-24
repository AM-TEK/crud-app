const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json())

// routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
  res.send("Hi from Node API updated again and again")
})

mongoose.connect("mongodb+srv://maldoalex:qXsDTkPMoUyDl2vd@backenddb.lhdbfpl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("Connected to database!");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  })
})
.catch(() => {
  console.log("Connection failed!");
})
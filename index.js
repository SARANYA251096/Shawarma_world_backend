require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/connections");
const Shawarma = require("./Models/shawarmaModel");

const app = express();

db();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const shawarmaRoute = require('./routes/shawarmaRoutes')
const userRoute = require("./routes/userRoutes")
const ordersRoutes=require("./routes/ordersRoutes")

app.use('/api/shawarmas/', shawarmaRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/',ordersRoutes)

app.get("/", (req, res) => {
  res.send("Server working !!!");
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});

const express = require("express");
const cors = require("cors");

const app = express(); // Inicializando o express

const conn = require("./db/conn");

// Models
const Product = require("./models/Product");

// Import Routes
const productRoutes = require("./routes/productRoutes");

// Import Controller
const ProductController = require("./controllers/ProductController");

// -------------- Template engine ------------
// app.engine("handlebars", exphbs.engine());
// app.set("view engine", "handlebars");

// -------------- Receber a resposta do body ---------
app.use(express.json()); // Esse middleware nos ajuda a receber os dados em json

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// -------------- ROUTES -----------------------
app.use("/product", productRoutes);
// app.use("/", authRoutes);

// app.get("/", ThoughtController.showThoughts);

// -------------- Conexão do App ---------------
conn
  //.sync({ force: true })
  .sync()
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));

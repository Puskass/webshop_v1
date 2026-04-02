const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path"); 
const authRouter = require("./routes/auth.routes");
const uploadRouter = require("./routes/upload.routes")
const shopProductsRouter = require("./routes/products.routes")
mongoose
  .connect(
    "mongodb+srv://tarikcosovic05:tarikcosovic05@cluster0.h850kbd.mongodb.net/",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", uploadRouter);
app.use("/api/shop/products", shopProductsRouter)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));

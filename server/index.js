const express = require("express");
const app = express();
require("dotenv").config();

const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");

const database = require("./config/database");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

// connect to db
database.connectToDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://quizify-liart.vercel.app/",
    credentials: true,
    maxAge: 14400,
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

app.use("/api/v1/", routes);

// activate server
app.listen(PORT,"0.0.0.0",  () => {
  console.log(`App is running on port ${PORT}`);
});

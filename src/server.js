import express from "express";
import bodyParser from "body-parser";
import viewEndgine from "./config/viewEngine";
import initWenRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEndgine(app);
initWenRoutes(app);

connectDB();

let port = process.env.PORT || 6767;
app.listen(port, () => {
  console.log("backend: " + port);
});

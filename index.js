import express from "express";
import path from "path";
import router from "./routes/route.js";
import loginRouter from "./routes/loginroute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//config path for environmet variable
dotenv.config({
  path: "./data/config.env",
});

const app = express();
const cwd = path.resolve();

app.set("view engine", "ejs");

//midddlewares
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(loginRouter);
app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log(`my expres server is runnig on ${process.env.PORT}`);
});

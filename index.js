import express from "express";
import path from "path";
import router from "./routes/route.js";
import loginRouter from "./routes/loginroute.js";
import cookieParser from "cookie-parser";

const app = express();
const cwd = path.resolve();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

//midddlewares
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(loginRouter);
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`my expres server is runnig on ${PORT}`);
  console.log(cwd);
  console.log(PORT);
});

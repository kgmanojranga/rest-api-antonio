import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import userRouter from "./router/index";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log("Hello Manoj...✅");
//   next();
// });

app.use("/api/v1/users", userRouter());

// const server = http.createServer(app);

export default app;

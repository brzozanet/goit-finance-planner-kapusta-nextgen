import express from "express";
import logger from "morgan";
import cors from "cors";

import authRouter from "./routes/api/auth.js";
import usersRouter from "./routes/api/user.js";
import transactionsRouter from "./routes/api/transaction.js";

const app = express();


app.use(logger("dev"));
app.use(cors("*"));
app.use(express.json());

app.get("/", (_,res) => {
  res.json("Hello")
});
app.use("/auth", authRouter);
app.use("/transaction", transactionsRouter);
app.use("/user", usersRouter);

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "The given endpoint does not exist",
    data: "Not found",
  });
});

app.use((error, _, res, __) => {
  console.log(error.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: error.message,
    data: "Internal server error",
  });
});

export default app;
import express from "express";
import mongoose from "mongoose";
import reviewrouter from "./routes/review-routes";
import userrouter from "./routes/user-routes";

const app = express();

app.use(express.json());

const url =
  "mongodb+srv://animesh:animesh@cluster0.ezibghm.mongodb.net/?retryWrites=true&w=majority";

app.use("/api/user", userrouter); //http://localhost:5000/api/user
app.use("/api/review", reviewrouter); //http://localhost:5000/api/review/ankit

mongoose
  .connect(url)
  .then(() => app.listen(5000))
  .then(() => console.log("listening on port 5000"))
  .catch((err) => console.log(err));

//userid - animesh
//password-animesh

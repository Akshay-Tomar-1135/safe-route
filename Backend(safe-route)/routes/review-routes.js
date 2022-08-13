import express from "express";
import {
  getAllReview,
  writeReview,
  updateReview,
  getById,
  deleteReview,
  getByPlace,
  getByUser,
} from "../controllers/review-controller";

const reviewrouter = express.Router();

reviewrouter.get("/", getAllReview);
reviewrouter.post("/add", writeReview);
reviewrouter.put("/update/:id", updateReview);
reviewrouter.delete("/delete/:id", deleteReview);
reviewrouter.get("/getById/:id", getById);
reviewrouter.get("/getByPlaceName", getByPlace);
reviewrouter.get("/getByUserName", getByUser);

export default reviewrouter;

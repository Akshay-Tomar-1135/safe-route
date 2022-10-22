import mongoose from "mongoose";
import Review from "../models/Review";

export const getAllReview = async (req, res, next) => {
  let reviews;
  try {
    reviews = await Review.find();
  } catch (err) {
    return console.log(err);
  }
  if (!reviews) {
    return res.status(404).json({ message: "No reviews found" });
  }
  return res.status(200).json({ reviews });
};

export const writeReview = async (req, res, next) => {
  const { placeName, rating, description, userName } = req.body;

  const review = new Review({
    placeName,
    rating,
    description,
    userName,
  });

  try {
    await review.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ review });
};

export const updateReview = async (req, res, next) => {
  const { placeName, rating, description } = req.body;
  const reviewId = req.params.id;
  let review;
  try {
    review = await Review.findByIdAndUpdate(reviewId, {
      placeName,
      rating,
      description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!review) {
    return res.status(500).json({ message: "unable to update the review" });
  }
  return res.status(200).json({ review });
};
//getting id by api
export const getById = async (req, res, next) => {
  const id = req.params.id;
  let review;
  try {
    review = await Review.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!review) {
    return res.status(404).json({ message: "review not found" });
  }
  return res.status(200).json({ review });
};

export const deleteReview = async (req, res, next) => {
  const id = req.params.id;
  let review;
  try {
    review = await Review.findByIdAndRemove(id);
  } catch (err) {
    return console.log(err);
  }
  if (!review) {
    return res.status(404).json({ message: "unable to delete review" });
  }

  return res.status(200).json({ message: "successfully deleted", review });
};

export const getByPlace = async (req, res, next) => {
  const { placeName } = req.body;
  let reviews;
  try {
    reviews = await Review.find({
      placeName: placeName,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!reviews) {
    return res.status(404).json({ message: "No reviews found" });
  }
  return res.status(200).json({ reviews });
};

export const getByUser = async (req, res, next) => {
  const { userName } = req.body;
  let reviews;
  try {
    reviews = await Review.find({
      userName: userName,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!reviews) {
    return res.status(404).json({ message: "No reviews found" });
  }
  return res.status(200).json({ reviews });
};

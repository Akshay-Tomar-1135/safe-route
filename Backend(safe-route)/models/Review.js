import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  placeName: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: true,
    minlength: 5,
  },
});
export default mongoose.model("Review", reviewSchema);

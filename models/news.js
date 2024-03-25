import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema(
  {
    headline: String,
    type: String,
    description: String
  },
  {
    timestamps: true,
  }
);

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;
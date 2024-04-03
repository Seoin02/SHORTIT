import mongoose from "mongoose";

const shortLinkScheme = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
    shortUrl: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const ShortLink =
  mongoose.models["ShortLink"] || mongoose.model("ShortLink", shortLinkScheme);

export default ShortLink;

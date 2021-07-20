import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Gnome = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    details: { type: String, required: true },
    image_url: { type: String, required: true },
    category: { type: Array, required: true },
    materials: { type: String, required: true },
    seller: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('gnomes', Gnome)
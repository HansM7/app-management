import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const adminSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuid(),
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  dni: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.admin || mongoose.model("admin", adminSchema);

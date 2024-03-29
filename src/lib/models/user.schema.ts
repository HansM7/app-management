import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuid(),
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },

  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.user || mongoose.model("user", userSchema);

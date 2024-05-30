import mongoose from "mongoose";

const deparmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Department", deparmentSchema);

import mongoose from "mongoose";
import { EStatusEquipment } from "../enums/equipment.enum";
import { v4 as uuid } from "uuid";

const equipmentSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuid(),
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  serie: {
    type: String,
    required: true,
  },
  heritage_code: {
    type: String,
    required: true,
  },
  code_optional: {
    type: String,
    required: true,
  },
  equipment_status: {
    type: String,
    enum: EStatusEquipment,
  },
  date_adquisition: {
    type: String,
  },
  time_waranty: {
    type: String,
  },

  // settings
  history_edited: {
    type: Array,
  },
  history_deleted: {
    type: Array,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.equipment ||
  mongoose.model("equipment", equipmentSchema);

/*  
[{
  dni,
  date,
  
}]
*/

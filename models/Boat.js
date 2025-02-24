import mongoose from 'mongoose';

const boatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  travelTime: { type: String, required: true },
  departureDateTime: { type: Date, required: true },
});

const Boat = mongoose.model('Boat', boatSchema);
export default Boat;

import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    boatId: { type: mongoose.Schema.Types.ObjectId, ref: "Boat", required: true },
    seatsBooked: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["Confirmed", "Pending", "Canceled"], default: "Confirmed" },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

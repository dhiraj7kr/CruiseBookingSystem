import Booking from "../models/Booking.js";
import User from "../models/User.js";
import Boat from "../models/Boat.js";

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "username name email phone country")
      .populate("boatId", "name price departureDateTime");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a booking
export const createBooking = async (req, res) => {
  const { userId, boatId, seatsBooked } = req.body;

  try {
    const boat = await Boat.findById(boatId);
    if (!boat) return res.status(404).json({ message: "Boat not found" });

    const totalPrice = boat.price * seatsBooked;
    const newBooking = new Booking({ userId, boatId, seatsBooked, totalPrice });
    await newBooking.save();

    res.status(201).json({ message: "Booking confirmed!", booking: newBooking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Cancel a booking
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "Canceled" }, { new: true });
    res.json({ message: "Booking canceled!", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

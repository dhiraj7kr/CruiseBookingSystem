import express from "express";
import { getAllBookings, createBooking, cancelBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", createBooking);
router.patch("/:id/cancel", cancelBooking);

export default router;

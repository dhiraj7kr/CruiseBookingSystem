import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import boatRoutes from './routes/boatRoutes.js';
import userRoutes from './routes/userRoutes.js';  // ✅ Import User Routes
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// ✅ Default API Route
app.get('/', (req, res) => {
  res.send('🚀 Cruise Booking API is running...');
});

// ✅ Routes
app.use('/api/boats', boatRoutes);
app.use('/api/users', userRoutes);  // ✅ Add User Routes
app.use("/api/bookings", bookingRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

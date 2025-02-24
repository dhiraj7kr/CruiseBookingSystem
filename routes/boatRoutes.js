import express from 'express';
import Boat from '../models/Boat.js';

const router = express.Router();

// Get all boats
router.get('/', async (req, res) => {
  try {
    const boats = await Boat.find();
    res.json(boats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new boat (Admin only)
router.post('/', async (req, res) => {
  const { name, capacity, price, travelTime, departureDateTime } = req.body;

  try {
    const newBoat = new Boat({ name, capacity, price, travelTime, departureDateTime });
    await newBoat.save();
    res.status(201).json(newBoat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;

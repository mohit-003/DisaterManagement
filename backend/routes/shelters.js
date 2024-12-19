const express = require('express');
const router = express.Router();
const Shelter = require('../models/Shelter');

// Get all shelters
router.get('/', async (req, res) => {
    try {
        const shelters = await Shelter.find();
        res.json(shelters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

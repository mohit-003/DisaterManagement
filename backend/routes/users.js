const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a user
router.post('/register', async (req, res) => {
    const { name, email, shelterId } = req.body;
    try {
        const user = new User({ name, email, shelterId });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

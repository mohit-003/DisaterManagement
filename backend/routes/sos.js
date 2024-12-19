const express = require('express');
const router = express.Router();

// Receive SOS message
router.post('/', (req, res) => {
    const { location } = req.body;
    console.log(`SOS received from location: ${JSON.stringify(location)}`);
    res.status(200).json({ message: 'SOS sent successfully!' });
});

module.exports = router;

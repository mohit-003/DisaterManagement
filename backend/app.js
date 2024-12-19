const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const shelterRoutes = require('./routes/shelters');
const userRoutes = require('./routes/users');
const sosRoutes = require('./routes/sos');

const app = express();
const PORT = 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/disasterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/api/shelters', shelterRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sos', sosRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

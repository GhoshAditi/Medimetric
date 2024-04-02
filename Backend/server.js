// Import required modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB database
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define Mongoose schema and model for medicine data
const medicineSchema = new Schema({
    name: String, // Name of the medicine
    dosage: String, // Dosage information
    frequency: String, // Frequency of intake
    startDate: Date, // Start date of the medicine
    endDate: Date, // End date of the medicine
    notes: String, // Any additional notes
});
const Medicine = mongoose.model('Medicine', medicineSchema);

// Create endpoint for medicine
app.post('/medicine', async (req, res) => {
    const newMedicine = new Medicine(req.body);
    const result = await newMedicine.save();
    res.send(result);
});

// Read endpoint for medicine
app.get('/medicine/:id', async (req, res) => {
    const medicine = await Medicine.findById(req.params.id);
    res.send(medicine);
});

// Update endpoint for medicine
app.put('/medicine/:id', async (req, res) => {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (medicine) {
        res.send(medicine);
    } else {
        res.status(404).send('Not Found');
    }
});

// Delete endpoint for medicine
app.delete('/medicine/:id', async (req, res) => {
    const result = await Medicine.findByIdAndDelete(req.params.id);
    res.send(result);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});
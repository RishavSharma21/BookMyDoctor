const express = require("express");
const router = express.Router();
const data = require("../data/storage");

// Get all doctors
router.get("/", (req, res) => {
    res.json(data.doctors);
});

// Get a doctor by ID
router.get("/:id", (req, res) => {
    const doctor = data.doctors.find(d => d.id === parseInt(req.params.id));
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
});

// Add a new doctor (Supports both JSON Body & Query Params)
router.post("/", (req, res) => {
    const { id, name, specialization } = req.body.id ? req.body : req.query; // Accept both body & query params

    if (!id || !name || !specialization) {
        return res.status(400).json({ error: "Missing fields" });
    }

    const newDoctor = { id: parseInt(id), name, specialization };
    data.doctors.push(newDoctor);
    res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
});

// Update a doctor
router.put("/:id", (req, res) => {
    const doctor = data.doctors.find(d => d.id === parseInt(req.params.id));
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });

    doctor.name = req.body.name || doctor.name;
    doctor.specialization = req.body.specialization || doctor.specialization;
    res.json({ message: "Doctor updated successfully", doctor });
});

// Delete a doctor
router.delete("/:id", (req, res) => {
    data.doctors = data.doctors.filter(d => d.id !== parseInt(req.params.id));
    res.json({ message: "Doctor deleted successfully" });
});

module.exports = router;

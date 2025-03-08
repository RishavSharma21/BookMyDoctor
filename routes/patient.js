const express = require("express");
const router = express.Router();
const data = require("../data/storage");

// Ensure patients array exists
data.patients = data.patients || [];

//  Get all patients
router.get("/", (req, res) => {
    res.json(data.patients);
});

//  Get a specific patient by ID
router.get("/:id", (req, res) => {
    const patient = data.patients.find(p => p.id === parseInt(req.params.id));
    if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
});

// Add a new patient (Uses JSON body)
router.post("/", (req, res) => {
    const { id, name, age } = req.body;

    if (!id || !name || !age) {
        return res.status(400).json({ error: "Missing fields" });
    }

    const newPatient = { id: parseInt(id), name, age: parseInt(age) };
    data.patients.push(newPatient);
    
    res.status(201).json({ message: "Patient added successfully", patient: newPatient });
});

// Update a patient (PUT method)
router.put("/:id", (req, res) => {
    const patient = data.patients.find(p => p.id === parseInt(req.params.id));
    if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
    }

    patient.name = req.body.name || patient.name;
    patient.age = req.body.age || patient.age;

    res.json({ message: "Patient updated successfully", patient });
});

// Delete a patient
router.delete("/:id", (req, res) => {
    const patientIndex = data.patients.findIndex(p => p.id === parseInt(req.params.id));
    if (patientIndex === -1) {
        return res.status(404).json({ error: "Patient not found" });
    }

    data.patients.splice(patientIndex, 1);
    res.json({ message: "Patient deleted successfully" });
});

module.exports = router;

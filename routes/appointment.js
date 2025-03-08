const express = require("express");
const router = express.Router();

// In-memory storage
const appointments = [];

// Get all appointments
router.get("/", (req, res) => {
    res.json(appointments);
});

// Get appointment by ID
router.get("/:id", (req, res) => {
    const appointment = appointments.find(a => a.id === parseInt(req.params.id));
    if (!appointment) return res.status(404).json({ error: "Appointment not found" });
    res.json(appointment);
});

// Add an appointment
router.post("/", (req, res) => {
    const { id, patientId, patientName, doctorId, date } = req.body;

    if (!id || !patientId || !patientName || !doctorId || !date) {
        return res.status(400).json({ error: "Missing appointment details" });
    }

    const newAppointment = {
        id: parseInt(id),
        patientId: parseInt(patientId),
        patientName,
        doctorId: parseInt(doctorId),
        date
    };

    appointments.push(newAppointment);
    res.status(201).json({ message: "Appointment added successfully", appointment: newAppointment });
});

// Update an appointment
router.put("/:id", (req, res) => {
    const appointment = appointments.find(a => a.id === parseInt(req.params.id));
    if (!appointment) return res.status(404).json({ error: "Appointment not found" });

    appointment.patientId = req.body.patientId ? parseInt(req.body.patientId) : appointment.patientId;
    appointment.patientName = req.body.patientName || appointment.patientName;
    appointment.doctorId = req.body.doctorId ? parseInt(req.body.doctorId) : appointment.doctorId;
    appointment.date = req.body.date || appointment.date;

    res.json({ message: "Appointment updated successfully", appointment });
});

// Delete an appointment
router.delete("/:id", (req, res) => {
    const index = appointments.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Appointment not found" });

    appointments.splice(index, 1);
    res.json({ message: "Appointment deleted successfully" });
});

module.exports = router;

// Create an Appointment (POST)

// {
//     "id": 101,
//     "patientId": 1,
//     "patientName": "Elon Musk",
//     "doctorId": 2,
//     "date": "2025-03-09"
//  }

 

// 4️⃣ Update an Appointment (PUT)

// {
//     "patientName": "Trump",
//     "doctorId": 3,
//     "date": "2025-03-10"
//  }
 
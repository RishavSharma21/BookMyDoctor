# 📌 BookMyDoctor

**BookMyDoctor** is an online doctor appointment booking system. It provides a RESTful API built with Node.js and Express.js, following a structured approach with in-memory data storage.

---

## 🛠️ Features
✔️ RESTful API for doctor appointment booking  
✔️ CRUD operations for appointments, doctors, and patients  
✔️ Real-time validation and error handling  
✔️ Secure and scalable Node.js backend  
✔️ Can be tested using **Postman** or similar API clients  

---

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** In-memory (can be extended to MongoDB/MySQL)  

---

## 📂 Project Structure
```yaml
BookMyDoctor/
│── routes/
│   ├── appointment.js
│   ├── doctor.js
│   ├── patient.js
│── middleware/
│   ├── errorHandler.js
│── data/
│   ├── storage.js
│── public/
│   ├── index.html
│── index.js
│── package.json
│── .gitignore
│── README.md



### ⚡ How to Run Locally

| Step  | Command                                             | Description                         |
|-------|-----------------------------------------------------|-------------------------------------|
| 1️⃣    | `git clone https://github.com/RishavSharma21/BookMyDoctor.git` | Clone the repository              |
| 2️⃣    | `cd BookMyDoctor`                                   | Navigate into the project directory |
| 3️⃣    | `npm install`                                      | Install dependencies               |
| 4️⃣    | `node index.js`                                    | Start the server                   |
| ✅    | Open `http://localhost:3000`                        | Access the app in a browser        |



📢 API Endpoints
| Method | Endpoint         | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/doctors`      | Get all doctors            |
| POST   | `/doctors`      | Add a new doctor           |
| GET    | `/patients`     | Get all patients           |
| POST   | `/patients`     | Add a new patient          |
| GET    | `/appointments` | Get all appointments       |
| POST   | `/appointments` | Book a new appointment     |

💡 Future Enhancements
✅ Database integration (MongoDB/MySQL)
✅ Doctor availability & appointment reminders

🤝 Contributing
Want to contribute? Feel free to raise an issue or submit a pull request!

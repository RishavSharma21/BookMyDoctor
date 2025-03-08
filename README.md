# BookMyDoctor

# 📌 **BookMyDoctor**

BookMyDoctor is an **online doctor appointment booking system** that provides a **RESTful API** built with **Node.js and Express.js**. It follows a **structured approach** with in-memory data storage.

---

## 🛠️ **Features**
✅ **RESTful API** for doctor appointment booking  
✅ **CRUD operations** for appointments, doctors, and patients  
✅ **Real-time validation** and error handling  
✅ **Secure & scalable** Node.js backend  
✅ **Testable via Postman** or similar API clients  

---

## 🚀 **Tech Stack**
- 🟢 **Backend:** Node.js, Express.js  
- 🗄️ **Database:** In-memory (can be extended to MongoDB/MySQL)  

---

## 📂 **Project Structure**
| 📁 **Folder/File** | 📜 **Description** |
|--------------------|------------------|
| `routes/`         | Contains route files |
| ├── `appointment.js` | Appointment routes |
| ├── `doctor.js`   | Doctor routes |
| ├── `patient.js`  | Patient routes |
| `middleware/`     | Middleware functions |
| ├── `errorHandler.js` | Handles errors |
| `data/`           | Data storage files |
| ├── `storage.js`  | In-memory storage |
| `public/`         | Public static files |
| ├── `index.html`  | Frontend file |
| `server.js`        | Main entry point |
| `package.json`    | Project metadata & dependencies |
| `.gitignore`      | Git ignore file |
| `README.md`       | Documentation |

---

## ⚡ **How to Run Locally**
| Step  | Command                                             | Description                         |
|-------|-----------------------------------------------------|-------------------------------------|
| 1️⃣    | `git clone https://github.com/RishavSharma21/BookMyDoctor.git` | Clone the repository              |
| 2️⃣    | `cd BookMyDoctor`                                   | Navigate into the project directory |
| 3️⃣    | `npm install`                                      | Install dependencies               |
| 4️⃣    | `node server.js`                                    | Start the server                   |
| ✅    | Open `http://localhost:3000`                        | Access the app in a browser        |

---

## 📢 **API Endpoints**
| 🏷 **Method** | 🔗 **Endpoint**       | 📜 **Description**         |
|--------------|----------------------|---------------------------|
| **GET**      | `/doctors`           | Get all doctors          |
| **POST**     | `/doctors`           | Add a new doctor         |
| **GET**      | `/patients`          | Get all patients         |
| **POST**     | `/patients`          | Add a new patient        |
| **GET**      | `/appointments`      | Get all appointments     |
| **POST**     | `/appointments`      | Book a new appointment   |

---

## 💡 **Future Enhancements**
✔️ **Database Integration** (MongoDB/MySQL)  
✔️ **Doctor Availability & Appointment Reminders**   
✔️ **Frontend UI for easy booking**  

---

## 🤝 **Contributing**
🔹 Want to contribute? **Feel free to raise an issue** or submit a **pull request**!  

---

## 📜 **License**
This project is **open-source** and free to use.

---

### 🚀 **Happy Coding!** 👨‍💻🔥  



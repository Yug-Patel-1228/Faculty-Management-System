import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import deptRoutes from "./routes/deptRoutes.js";
import payrollRoutes from "./routes/payrollRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import "./cron/payrollCron.js";
import birthdayRoutes from "./routes/birthdayRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/departments", deptRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/meeting", meetingRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/todo", todoRoutes);
app.use("/api/birthday", birthdayRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(5000, ()=>console.log("Server running"));
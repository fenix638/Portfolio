import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import projectsRoutes from "./routes/projects.js";
import skillsRoutes from "./routes/skills.js";
import contactRoutes from "./routes/contact.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// API routes
app.use("/api/projects", projectsRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

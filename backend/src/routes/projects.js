import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: "desc" }
        });
        res.json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

export default router;

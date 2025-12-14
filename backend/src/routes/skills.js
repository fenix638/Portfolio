import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

// GET all skills
router.get("/", async (req, res) => {
    try {
        const skills = await prisma.skill.findMany({
            orderBy: { name: "asc" }
        });
        res.json(skills);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch skills" });
    }
});

export default router;

import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        await prisma.contactMessage.create({
            data: { name, email, message }
        });

        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

// GET all contact messages (admin)
router.get("/", async (req, res) => {
    try {
        const messages = await prisma.contactMessage.findMany({
            orderBy: { createdAt: "desc" }
        });
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});

export default router;
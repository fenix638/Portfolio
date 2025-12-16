import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) return res.status(401).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
        { adminId: admin.id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
});

export default router;

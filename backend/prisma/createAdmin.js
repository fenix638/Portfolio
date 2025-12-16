import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash("eK80#25>A[Kt", 10);

    await prisma.admin.create({
        data: {
            email: "admin@portfolio.scott",
            password: hashedPassword
        }
    });

    console.log("Admin created");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

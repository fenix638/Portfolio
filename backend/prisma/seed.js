import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.project.createMany({
        data: [
            {
                title: "Portfolio Website",
                description: "Personal portfolio built with React, Node.js, and PostgreSQL.",
                githubUrl: "https://github.com/yourname/portfolio",
                liveUrl: "https://yourportfolio.com"
            },
            {
                title: "Todo App",
                description: "Full-stack todo app with authentication and REST API.",
                githubUrl: "https://github.com/yourname/todo-app"
            }
        ]
    });

    await prisma.skill.createMany({
        data: [
            { name: "JavaScript", icon: "js" },
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "node" },
            { name: "PostgreSQL", icon: "postgres" }
        ]
    });

    console.log("🌱 Database seeded!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());

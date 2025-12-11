import { motion } from "framer-motion";

export default function ProjectList() {
    const projects = [
        { id: 1, title: "Example Project", description: "This is a project placeholder." },
        { id: 2, title: "Second Project", description: "Another placeholder project." }
    ];
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,  // ⬅ Only used in initial reveal
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };
    return (
        <section id="projects" className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer"
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            }
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

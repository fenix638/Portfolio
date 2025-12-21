import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`);

                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }

                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section className="projects">
                <Loader text="Loading projects..." />
            </section>
        );
    }

    if (error) {
        return (
            <section className="projects">
                <p className="error">Error: {error}</p>
            </section>
        );
    }

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
        <section id="projects" className="px-6 bg-white py-20">
            <motion.h2 className="text-3xl font-bold text-center mb-4"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}>
                Projects
            </motion.h2>

            <motion.p
                className="text-gray-500 text-center mb-12 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                A selection of professional and personal work
            </motion.p>
            <div className="mx-auto mt-3 mb-10 h-1 w-16 rounded-full bg-purple-500/40" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-white p-6 rounded-xl border border-gray-200
                         shadow-sm hover:shadow-lg cursor-pointer transition"
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

                        <div className="project-links">
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            )}
                            <br></br>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                    Let's see it!
                                </a>
                            )}
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}

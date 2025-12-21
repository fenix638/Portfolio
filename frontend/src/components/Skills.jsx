import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { skillIcons } from "../icons/skillIcons";
import Loader from "../components/Loader";

export default function Skills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/skills`);

                if (!response.ok) {
                    throw new Error("Failed to fetch skills");
                }

                const data = await response.json();
                setSkills(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) {
        return (
            <section className="skills">
                <Loader text="Loading skills..." />
            </section>
        );
    }

    if (error) {
        return (
            <section className="skills">
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
        <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200">
            <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => {
                    const Icon = skillIcons[skill.icon];

                    return (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center
                   cursor-pointer transition-shadow hover:shadow-xl"
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
                            {Icon && <Icon className="h-12 w-12 text-purple-500 mb-3" />}
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

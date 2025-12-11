import { motion } from "framer-motion";
import {
    CodeBracketIcon,
    ServerIcon,
    CloudIcon,
    CpuChipIcon,
    DevicePhoneMobileIcon,
    RocketLaunchIcon
} from "@heroicons/react/24/solid";

export default function Skills() {
    const skills = [
        { name: "JavaScript", icon: CodeBracketIcon },
        { name: "React", icon: DevicePhoneMobileIcon },
        { name: "Node.js", icon: ServerIcon },
        { name: "PostgreSQL", icon: CloudIcon },
        { name: "APIs & Backend", icon: CpuChipIcon },
        { name: "Deployment", icon: RocketLaunchIcon },
    ];

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
                    const Icon = skill.icon;

                    return (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Icon className="h-12 w-12 text-purple-500 mb-3" />
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

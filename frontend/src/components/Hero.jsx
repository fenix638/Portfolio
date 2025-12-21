import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden flex flex-col items-center
             justify-center text-center py-24 px-4
             bg-gradient-to-b from-gray-900 to-gray-700 text-white">

            <div className="absolute -left-40 top-1/3 pointer-events-none">
                <div className="w-[28rem] h-[28rem] bg-purple-500
                    rounded-full blur-3xl opacity-25" />
            </div>

            <div className="absolute -right-40 top-1/2 pointer-events-none">
                <div className="w-[28rem] h-[28rem] bg-indigo-500
                    rounded-full blur-3xl opacity-25" />
            </div>
            <motion.div variants={container}
                        initial="hidden"
                        animate="show"
                        className="relative z-10 max-w-3xl text-center">
                <motion.p
                    variants={item}
                    className="text-lg text-white mb-2"
                >
                    Hello,
                </motion.p>

                <motion.h1
                    variants={item}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    I’m Scott J. Thushyanthan
                </motion.h1>

                <motion.div
                    variants={container}
                    className="flex justify-center gap-3 flex-wrap mb-8"
                >
                    {[
                        "Full Stack Developer",
                        "Technical Consultant",
                        "Team Coordinator",
                    ].map((role) => (
                        <motion.span
                            key={role}
                            variants={item}
                            className="px-4 py-1 rounded-full border border-purple-400/40
                         text-sm text-purple-300"
                        >
                            {role}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    variants={item}
                    className="text-gray-300 leading-relaxed mb-4"
                >
                    I craft end-to-end web solutions, from intuitive frontends to
                    secure APIs and well-structured databases.
                </motion.p>

                <motion.p
                    variants={item}
                    className="text-gray-300 leading-relaxed mb-4"
                >
                    I’m currently consulting on a high-impact project for a leading
                    energy production company, working primarily with PHP on
                    enterprise-level systems.
                </motion.p>

                <motion.p
                    variants={item}
                    className="text-gray-300 leading-relaxed"
                >
                    Beyond development, I manage a small team handling application
                    maintenance, coordinating AM tickets and workflows using Redmine,
                    while continuously improving my skills through real-world
                    full-stack projects.
                </motion.p>
            </motion.div>
        </section>
    );
}

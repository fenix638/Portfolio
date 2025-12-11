import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-700 text-white relative overflow-hidden">

            {/* Subtle background blurred circle */}
            <div className="absolute inset-0 flex justify-center opacity-20 blur-3xl">
                <div className="bg-purple-500 w-96 h-96 rounded-full"></div>
            </div>

            <motion.h1
                className="text-5xl font-extrabold mb-4 relative z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hello, I'm Scott Thushyanthan
            </motion.h1>

            <motion.p
                className="text-lg max-w-2xl relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                A budding Full Stack Developer learning React, Node.js, and Postgres.
            </motion.p>
        </section>
    );
}

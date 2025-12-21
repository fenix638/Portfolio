import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
        fixed top-0 left-0 w-full z-50 
        px-6 py-4 transition-all duration-300
        ${scrolled ? "bg-gray-900 shadow-lg py-3" : "bg-transparent py-5"}
      `}
        >
            <div className="max-w-5xl mx-auto flex justify-between items-center ">
                <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                    SJT
                </h2>

                <nav className="hidden md:flex gap-6 text-gray-300">
                    <a href="#hero" className="hover:text-white transition">Home</a>
                    <a href="#skills" className="hover:text-white transition">Skills</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#contact" className="hover:text-white transition">Contact me</a>
                </nav>
            </div>
        </motion.header>
    );
}

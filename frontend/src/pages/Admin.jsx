import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Admin({ onLogout }) {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout();
        navigate("/login");
    };

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/contact`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );

                if (!response.ok) {
                    location.replace('/login');
                    throw new Error("Failed to fetch messages");
                }

                const data = await response.json();
                setMessages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    if (loading) return <p>Loading messages...</p>;
    if (error) return <p>Error: {error}</p>;


    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    const listVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, ease: "easeOut" },
        },
    };
    return (

        <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-700 text-white"
        >
            {/* Top bar */}
            <div className="w-full max-w-5xl mx-auto px-4 py-4 flex justify-end">
                <motion.button
                    onClick={handleLogoutClick}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-xl
                 bg-slate-800 px-4 py-2 text-sm font-medium
                 text-slate-100 border border-slate-700
                 shadow-sm hover:bg-slate-700 hover:shadow-md
                 transition"
                >
                    Logout
                </motion.button>
            </div>

            <main className="flex-1 px-4 py-10 max-w-5xl mx-auto w-full">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Contact Messages
                </h2>

                {messages.length === 0 ? (
                    <p className="text-center text-slate-400">
                        No messages yet.
                    </p>
                ) : (
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-6"
                    >
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                variants={cardVariants}
                                whileHover={{ y: -4 }}
                                className="rounded-2xl border border-slate-200/10
                       bg-gradient-to-b from-slate-100 to-slate-200
                       p-6 shadow-sm transition"
                            >
                                <div className="space-y-2 text-slate-800">
                                    <p>
                                        <span className="font-semibold text-slate-700">Name:</span>{" "}
                                        {msg.name}
                                    </p>

                                    <p>
                                        <span className="font-semibold text-slate-700">Email:</span>{" "}
                                        <a
                                            href={`mailto:${msg.email}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {msg.email}
                                        </a>
                                    </p>

                                    <p>
                                        <span className="font-semibold text-slate-700">Message:</span>{" "}
                                        {msg.message}
                                    </p>
                                </div>

                                <div className="mt-4 text-sm text-slate-500 text-right">
                                    {new Date(msg.createdAt).toLocaleString()}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </main>

            <Footer />
        </motion.div>

    );

}

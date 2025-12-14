import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSuccess("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200"
        >
            <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
            </motion.h2>

            <motion.form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md
                       flex flex-col gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <input
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300
                           resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                    disabled={loading}
                    className="mt-2 bg-purple-500 text-white py-3 rounded-lg
                           font-semibold transition-all
                           hover:bg-purple-600 hover:shadow-lg
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                    <p className="text-green-600 text-center font-medium">
                        {success}
                    </p>
                )}

                {error && (
                    <p className="text-red-600 text-center font-medium">
                        {error}
                    </p>
                )}
            </motion.form>
        </section>
    );

}

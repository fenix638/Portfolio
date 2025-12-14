import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Admin() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/contact`
                );

                if (!response.ok) {
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

    return (

        <div className="min-h-screen flex flex-col justify-center text-center bg-gradient-to-b from-gray-900 to-gray-700 text-white">

            <main className="flex-1 px-4 py-10 max-w-5xl mx-auto w-full">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Contact Messages
                </h2>

                {messages.length === 0 ? (
                    <p className="text-center text-slate-500">
                        No messages yet.
                    </p>
                ) : (
                    <div className="grid gap-6">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition"
                            >
                                <div className="space-y-2">
                                    <p className="text-slate-700">
                                        <span className="font-medium text-slate-600">Name:</span>{" "}

                                        {msg.name}
                                    </p>

                                    <p>
                                        <span className="font-medium text-slate-600">Email:</span>{" "}
                                        <a
                                            href={`mailto:${msg.email}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {msg.email}
                                        </a>
                                    </p>

                                    <p className="text-slate-700">
                  <span className="font-medium text-slate-600">
                    Message:
                  </span>{" "}
                                        {msg.message}
                                    </p>
                                </div>

                                <div className="mt-4 text-sm text-slate-400 text-right">
                                    {new Date(msg.createdAt).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );

}

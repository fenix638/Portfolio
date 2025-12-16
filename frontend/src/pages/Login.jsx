import { useState } from "react";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                }
            );

            if (!res.ok) throw new Error("Login failed");

            const { token } = await res.json();
            const expiresIn = 60 * 60 * 1000;
            const expiresAt = Date.now() + expiresIn;

            localStorage.setItem("token", token);
            localStorage.setItem("tokenExpiresAt", expiresAt);

            onLogin();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center text-center bg-gradient-to-b from-gray-950 to-gray-700 text-white">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm mx-auto mt-20 p-8 bg-gradient-to-b from-zinc-900 to-gray-800 rounded-2xl shadow-lg space-y-6"
            >
                <h2 className="text-2xl font-semibold text-center text-zinc-800 dark:text-zinc-100">
                    Admin Login
                </h2>

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
                >
                    Login
                </button>

                {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                )}
            </form>
        </div>

    );
}

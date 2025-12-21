export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 text-center py-6">
            <p className="flex justify-center text-sm">© 2025 Scott Thushyanthan — All Rights Reserved</p>
            <div className="flex justify-center gap-6">
                <a
                    href="https://www.linkedin.com/in/scott-jeluxsan-thushyanthan-b95430176/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    LinkedIn
                </a>
                <a href="https://github.com/fenix638"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-white transition"
                >
                    GitHub
                </a>
                <a href="mailto:scottthushyanthan@outlook.it"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-white transition"
                >
                    Email
                </a>
            </div>

        </footer>
    );
}

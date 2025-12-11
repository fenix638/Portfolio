export default function ProjectList() {
    const projects = [
        { id: 1, title: "Example Project", description: "This is a project placeholder." },
        { id: 2, title: "Second Project", description: "Another placeholder project." }
    ];

    return (
        <section className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import Skills from "./components/Skills.jsx";

function App() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <Hero />
                <Skills />
                <ProjectList />
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;

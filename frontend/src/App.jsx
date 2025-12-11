import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectList from "./components/ProjectList.jsx";
import Footer from "./components/Footer.jsx";
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

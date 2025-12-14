import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProjectList from "../components/ProjectList.jsx";
import Footer from "../components/Footer.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact";


export default function Home() {

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <Hero />
                <Skills />
                <ProjectList />
                <Contact />
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
}


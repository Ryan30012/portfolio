import NavBar from "../Components/NavBar"
import HeroSection from "../Components/HeroSection"
import StarBackground from "../Components/StarBackground"
import ThemeToggle from "../Components/ThemeToggle"
import About from "../Components/About"
import Skills from "../Components/Skills"
import Projects from "../Components/Projects"
import Footer from "../Components/Footer"

export const Home = () => {


    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/*Theme Toggle Button*/}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar*/ }
            <NavBar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <About />
                <Skills />
                <Projects />
            </main>

            {/* Footer */}
            <Footer />
        </div>    
    )
}
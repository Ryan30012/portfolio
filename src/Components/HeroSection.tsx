import { ArrowDown } from "lucide-react";


function HeroSection() {


    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ryan</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Sefrioui</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a passionate software engineer who loves building interactive web experiences and solving real-world problems with clean, efficient code. Whether it's developing frontend interfaces or diving into backend logic, I enjoy bringing ideas to life through technology.<br />
                        Let’s explore what I’ve been working on.
                    </p>

                    <div className="opcaity-0 animate-fade-in-delay-4">
                        <a className="cosmic-button" href="#projects">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="test-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
    
}


export default HeroSection;
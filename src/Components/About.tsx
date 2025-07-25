import { Briefcase, Code, User } from "lucide-react";



function About() {
    
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3>
                        Passionate Software Developer
                    </h3>
                    <p className="text-muted-foreground">
                        I’m a curious and creative software engineer with a strong passion for building intuitive and responsive web applications. I enjoy transforming complex problems into clean, efficient code and always strive to improve user experiences. My journey in tech has led me to work on projects ranging from games to management systems, always keeping usability and performance in mind.
                    </p>
                    <p className="text-muted-foreground">
                        When I'm not coding, you can find me at the gym, on the volleyball court, or exploring the latest tech trends.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="/CV-Ryan-2025.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/80 transition-colors duration-300">
                            Download My CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border card-hover p6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I specialize in crafting dynamic and responsive websites using modern technologies like React, JavaScript, and CSS. My projects prioritize clean design and seamless user interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border card-hover p6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Collaborative Projects</h4>
                                <p className="text-muted-foreground">
                                    From leading a UI team to working on full-stack systems, I thrive in team environments. I enjoy planning features, sharing ideas, and collaborating with others to bring complex projects to life.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border card-hover p6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Interactive Experience</h4>
                                <p className="text-muted-foreground">
                                    I’ve built games and simulations using tools like Unity and C++. These projects allowed me to combine logic, design, and storytelling into immersive experiences for users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
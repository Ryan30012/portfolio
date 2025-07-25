import { ArrowDown, ExternalLinkIcon, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        name: "Chess Game Replica",
        description: "This is a recreation of the classic chess game, built using C++ and SFML.",
        image: "/projects/chessgame.png",
        tags: ["C++", "GitHub/Git", "SFML"],
        githubUrl: "https://github.com/Ryan30012/ChessGame"
    },
    {
        id: 2,
        name: "Med-To-Go",
        description: "A web application for managing medical prescriptions and appointments, built with React and Node.js.",
        image: "/projects/Med-To-Go.PNG",
        tags: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
        githubUrl: "https://github.com/Ryan30012/Med-To-Go"
    },
    {
        id: 3,
        name: "Music-DB-Spotify-API",
        description: "A music database application that utilizes the Spotify API to fetch and display music data.",
        image: "/projects/Music-DB-Spotify-API.PNG",
        tags: ["Python", "SQL", "Spotify API"],
        githubUrl: "https://github.com/Ryan30012/Music-DB-Spotify-API"
    },
    {
        id: 4,
        name: "Tower Defense Game",
        description: "A fun and engaging tower defense game built using C++ and SFML, featuring various levels and challenges.",
        image: "/projects/Tower-Defense.PNG",
        tags: ["C++", "SFML", "Game Development"],
        githubUrl: "https://github.com/Ryan30012/TowerDefense"
    },
    {
        id: 5,
        name: "AnaCondo",
        description: "A web application for managing Condos for owners and Renters.",
        image: "/projects/AnaCondo.PNG",
        tags: ["Typescript", "React", "Node.js", "Tailwind CSS", "Vercel Deployement", "Vercel DB", "PostgreSQL"],
        githubUrl: "https://github.com/Ryan30012/AnaCondo"
    },
    {
        id: 6,
        name: "Remake of SPCA website",
        description: "A remake of the SPCA website, showcasing my skills in web development and design.",
        image: "/projects/SPCA.PNG",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "PgAdmin"],
        githubUrl: "https://github.com/Ryan30012/Soen_Project_SPCA"
    }
]


function Projects() {
    

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                   <span className="text-primary">Projects</span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on, showcasing my skills in various technologies and frameworks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div 
                            key={key}
                            className="group bg-card/40 rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>                               
                            

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a></a>
                                    <a href={project.githubUrl} className="text-foreground/80 mr-3 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/Ryan30012/" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check out my GitHub! <ArrowDown size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects;
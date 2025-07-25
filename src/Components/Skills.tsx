import { useState } from 'react';
import cn from '../Lib/utils';


const skills = [
    //Programing Languages
    {name: "HTML", level: 90, category: "Frontend"},
    {name: "React", level: 80, category: "Frontend"},
    {name: "Typescript", level: 60, category: "Frontend"},
    {name: "CSS", level: 80, category: "Frontend"},
    {name: "Tailwind CSS", level: 70, category: "Frontend"},
    {name: "Node.js", level: 70, category: "Backend"},
    {name: "JavaScript", level: 80, category: "Backend"},
    {name: "PHP", level: 70, category: "Backend"},
    {name: "SQL", level: 80, category: "Backend"},
    {name: "PostgreSQL", level: 80, category: "Backend"},
    {name: "MongoDB", level: 80, category: "Backend"},
    {name: "Python", level: 90, category: "Language"},
    {name: "Java", level: 90, category: "Language"},
    {name: "C++", level: 80, category: "Language"},
    {name: "C#", level: 75, category: "Language"},

    //Saving format
    {name: "JSON", level: 90, category: "Data"},
    {name: "XML", level: 70, category: "Data"},
    {name: "CSL", level: 100, category: "Data"},

    //Tools
    {name: "Git/GitHub", level: 90, category: "Tools"},
    {name: "Docker", level: 70, category: "Tools"},
    {name: "Eclipse IDE", level: 80, category: "Tools"},
    {name: "Visual Studio Code", level: 90, category: "Tools"},
    {name: "Figma", level: 70, category: "Tools"},

];

const categories = [
    "All",
    "Frontend",
    "Backend",
    "Language",
    "Data",
    "Tools"
];


function Skills() {

    const [activeCat, setCategory] = useState("All");

    const filteredSkills = skills.filter((skill) => activeCat === "All" || skill.category === activeCat);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((cat, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCategory(cat)}
                            className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCat == cat 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-primary/10 text-foreground card-hover hover:bg-primary/30"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text=left mb-4">    
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                style={{ width: `${skill.level}%`}}
                                />
                            </div>

                            <div className="text-right mt-1 text-sm text-muted-foreground">
                                <span>{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Skills;
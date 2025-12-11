"use client";
import { useI18n } from "../../../locales/client";
import { Code2, Rocket, Brain, Coffee } from "lucide-react";

export default function About() {
    const t = useI18n();

    const skills = [
        { icon: Code2, label: "Frontend", description: "React, Next.js, Tailwind CSS, TypeScript" },
        { icon: Rocket, label: "Backend", description: "Node.js, Express, PostgreSQL, MongoDB" },
        { icon: Brain, label: "Learning", description: "AI Chatbot" },
        { icon: Coffee, label: "Soft Skills", description: t("about.skills.softSkills") },
    ];
    const certificates = [
        {
            title: "Programa Tu Empleo",
            issuer: "Fundación Empujar",
            year: "2024",
            img: "/certificates/ProgramaEmpujar.jpg",
        },
        {
            title: "Desarrollo Web full stack",
            issuer: "Fundación Integrar - Programa IntegrarTec",
            year: "2025",
            img: "/certificates/Integrar.PNG",
        },
    ];



    return (
        <main className="min-h-screen bg-background/90 text-foreground px-4 pt-32 sm:px-6 lg:px-8 backdrop-blur-md">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-6 gradient-text inline-block">
                        {t("about.title")}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {t("about.bio")}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-xl glass-effect border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{skill.label}</h3>
                                        <p className="text-muted-foreground text-sm">{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Certificates Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b border-border/50 pb-2">
                        {t("about.certificates")}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {certificates.map((cert, i) => (
                            <div
                                key={i}
                                className="
                    group flex flex-col rounded-xl glass-effect overflow-hidden
                    border border-border/50
                    hover:border-primary/50
                    transition-all duration-300 
                    hover:shadow-lg hover:-translate-y-1
                "
                            >
                                {/* Imagen con efecto zoom igual a proyectos */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="w-full h-full object-contain bg-white 
                                   transition-transform duration-700 
                                   group-hover:scale-105"
                                    />

                                    {/* Degradado igual al proyecto */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Contenido */}
                                <div className="p-5 flex flex-col">
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm">
                                        {cert.issuer} — {cert.year}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>





                {/* Experience Section Placeholder (can be expanded later) */}
                {/* <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b border-border/50 pb-2">
                        {t("about.experience")}
                    </h2>
                    <div className="space-y-8">
                        <div className="relative pl-8 border-l-2 border-primary/20">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                            <h3 className="font-bold text-lg">Full Stack Developer</h3>
                            <p className="text-sm text-muted-foreground mb-2">Freelance | 2023 - Present</p>
                            <p className="text-muted-foreground">
                                Building responsive web applications and custom solutions for clients using modern technologies.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </main>
    );
}

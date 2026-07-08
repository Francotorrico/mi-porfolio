"use client";
import { useI18n, useCurrentLocale } from "../../../lib/locales/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectModalMui, { LinkItem } from "../../../components/features/ProjectModalMui";
import ImageCarousel from "../../../components/ui/ImageCarousel";

export default function Projects() {
    const t = useI18n();
    const currentLocale = useCurrentLocale();

    // Reusing the projects data structure (in a real app, this might come from a shared data file or API)
    const projects: {
        id: number;
        titleKey: string;
        descriptionKey: string;
        tags: string[];
        images: string[];
        links: LinkItem[];
    }[] = [
            {
                id: 4,
                titleKey: "project4.title",
                descriptionKey: "project4.description",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
                images: ["/projects/invitacion-card.png","/projects/invitacion-home.png"],
                links: [
                    { label: "Repo", type: "repo", url: "https://github.com/Francotorrico/invitation-event-card" },
                    { label: "Live Demo", type: "web", url: "https://invitation-event-card.vercel.app" },
                ]
            },
            {
                id: 1,
                titleKey: "project1.title",
                descriptionKey: "project1.description",
                tags: ["React", "NestJS", "PostgreSQL", "Docker", "AWS", "Mercado Pago", "NextJS"],
                images: ["/projects/solidaria.PNG"],
                links: [
                    { label: "Frontend Repo", type: "repo", url: "https://github.com/Danadty/solidarIA-Front" },
                    { label: "Backend Repo", type: "repo", url: "https://github.com/Danadty/solidarIA" },
                    { label: "Live Demo", type: "web", url: "https://solidariafrontappong.vercel.app" },
                ]
            },
            {
                id: 2,
                titleKey: "project2.title",
                descriptionKey: "project2.description",
                tags: ["Python", "Machine Learning", "PostgreSQL", "JWT"],
                images: ["/projects/dimaia.PNG"],
                links: [
                    { label: "Live Demo", type: "web", url: "https://dimaia.vercel.app" },
                ]
            },
            {
                id: 3,
                titleKey: "project3.title",
                descriptionKey: "project3.description",
                tags: ["React", "TypeScript", "Tailwind", "LocalStorage"],
                images: ["/projects/gestorTareas.PNG"],
                links: [
                    { label: "Frontend Repo", type: "repo", url: "https://github.com/Francotorrico/full_stack_exercises/tree/main/Back/30%20-%20React%20Proyects/List-Tasks" },
                    { label: "Live Demo", type: "web", url: "https://list-tasks-sigma.vercel.app" },
                ]
            },
        ];

    return (
        <main className="min-h-screen bg-background/90 text-foreground px-4 pt-32 sm:px-6 lg:px-8 backdrop-blur-md">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 gradient-text inline-block">
                        {t("projectsPage.title")}
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-lg">
                        {t("projectsPage.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {projects.map((project) => {
                        return (
                            <div
                                key={project.id}
                                className="group flex flex-col rounded-xl glass-effect overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* image */}
                                <div className="relative h-48 sm:h-60 w-full overflow-hidden group">
                                    <ImageCarousel
                                        images={project.images}
                                        alt={t(project.titleKey as keyof typeof t)}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                {/* content */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                        {t(project.titleKey as keyof typeof t)}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 text-sm grow line-clamp-3">
                                        {t(project.descriptionKey as keyof typeof t)}
                                    </p>

                                    {/* tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <ProjectModalMui links={project.links}>
                                        <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mt-auto group/btn">
                                            {t("work.viewProject")}
                                            <ArrowRight
                                                size={16}
                                                className="transition-transform group-hover/btn:translate-x-1"
                                            />
                                        </button>
                                    </ProjectModalMui>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

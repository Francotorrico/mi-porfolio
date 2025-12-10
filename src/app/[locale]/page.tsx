"use client";
import Image from "next/image";
// import { Header } from "../components/Header";
import { useI18n, useCurrentLocale } from "../../locales/client";

import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";
import Link from "next/link";
import AvatarGreet from "../../components/AvatarGreet";

export default function Home() {

  const t = useI18n();
  const currentLocale = useCurrentLocale();
  /* proyectos */
  const projects = [
    {
      id: 1,
      titleKey: "project1.title",
      descriptionKey: "project1.description",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-aae19106c108?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      titleKey: "project2.title",
      descriptionKey: "project2.description",
      tags: ["Diseño", "Figma", "Componentes"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      titleKey: "project3.title",
      descriptionKey: "project3.description",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ];

  const skills = [
    { icon: Code2, labelKey: "skills.development", descriptionKey: "skills.developmentDesc" },
    { icon: Rocket, labelKey: "skills.deployment", descriptionKey: "skills.deploymentDesc" },
  ];
  return (

    <main className="
    min-h-screen bg-background/90 text-foreground
    px-4 pt-32 sm:px-6 lg:px-8 backdrop-blur-md
    
    ">

      {/* Hero Section */}
      <section className="mb-16 md:ml-16 lg:ml-24 xl:ml-52 transition-all duration-500 ease-in-out">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="flex flex-col gap-6"
          >

            <p className="text-primary font-semibold
          text-md uppercase tracking-widest mb-2
          ">
              {t('hero.subtitle')}
            </p>
            <h1 className="text-4xl font-bold mb-4 
          leading-tight sm:text-5xl 
        ">
              <span className=" gradient-text">
                {t('hero.title').split(' ')[0]}
              </span>{" "}
              {t('hero.title').substring(t('hero.title').indexOf(' ') + 1)}
            </h1>
            <p className=" text-base text-muted-foreground mb-6">
              {t('hero.description')}
            </p>
            <div
              className="flex flex-col gap-3 pt-6 md:flex-row"
            >
              <button className="
            px-6 py-3 rounded-lg bg-primary
            text-primary-foreground font-semibold flex items-center gap-2
            justify-center hover:opacity-80 
            hover:scale-101 transition-all duration-300 ease-in-out
            
          ">
                {t('hero.viewWork')}
                <ArrowRight size={20} />
              </button>
              <button className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary
          ">
                {t('hero.contact')}
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-float">

            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-border/50 glow-effect"
            >
              <div className="w-full h-full flex items-center justify-center">
                <AvatarGreet />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* {skills section */}

      <section className="section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-4 
          "
          >{t('skills.title')}</h2>
          <p
            className="text-muted-foreground mb-12 max-w-xl"
          >{t('skills.description')}</p>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2
                  p-4 rounded-lg glass-effect hover:scale-105 
                  transition-transform
                  
                  ">
                  <Icon
                    className="w-12 h-12 text-primary mb-4"
                    size={20}
                  />
                  <h3 className="text-center
                    font-semibold
                  ">{t(skill.labelKey as keyof typeof t)}</h3>
                  <p
                    className="text-center text-muted-foreground"
                  >{t(skill.descriptionKey as keyof typeof t)}</p>

                </div>

              );
            })}

          </div>

        </div>
      </section>


      {/* projects section */}
      <section
        className="section-padding"
      >

        <div className="max-w-7xl mx-auto">
          {/* header del div */}
          <div
            className="mb-12"
          >
            <h2 className="font-bold text-4xl mb-4">
              {t('work.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {t('work.description')}
            </p>
          </div>

          {/* projects */}
          <div
            className="space-y-12"
          >
            {projects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >

                  {/* image */}
                  <div
                    className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div
                      className="relative overflow-hidden rounded-xl glass-effect h-64 sm:h-80 md:h-96 glow-effect group"
                    >

                      <img src={project.image} alt={t(project.titleKey as keyof typeof t)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                  {/* text */}
                  <div
                    className={index % 2 === 1 ? "md:order-1" : ""}
                  >
                    <h3
                      className="font-bold sm:text-3xl text-2xl mb-3"
                    >
                      {t(project.titleKey as keyof typeof t)}
                    </h3>
                    <p
                      className="text-muted-foreground mb-4 text-base sm:text-lg"
                    >
                      {t(project.descriptionKey as keyof typeof t)}
                    </p>
                    {/* tags */}
                    <div
                      className="flex flex-wrap gap-2 mb-4"
                    >
                      {project.tags.map((tag) => (

                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"

                        >
                          {tag}
                        </span>

                      ))}

                    </div>

                    <button
                      className="flex p-2 items-center gap-2 text-primary font-semibold hover:gap-3 transition-all
                      border-t border-t-primary/20
                      hover:border-t-primary
                      border-b border-b-primary/20 hover:border-b-primary
                      rounded-lg"
                    >
                      {t('work.viewProject')}
                      <ArrowRight size={20}
                        className=""
                      />


                    </button>


                  </div>
                </div>


              )
            })}

            <div className="text-center mt-16">
              <Link
                href={`/${currentLocale}/colores`}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-all"
              >
                <p>
                  {t("work.viewAll")}
                </p>
                <ArrowRight size={20} />
              </Link>
            </div>

          </div>


        </div>

      </section>

      {/* iniciar conversacion */}

      <section
        className="py-12 sm:py-20 bg-card/50"
      >
        <div
          className="max-w-7xl mx-auto text-center px-4"
        >
          <h1
            className="font-bold text-3xl mb-4 sm:text-5xl sm:mb-6 text-primary/80 "
          >
            {t("cta.title")}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground
          mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <button
            className="w-full sm:w-auto px-6 sm:px-8 py-3
          sm:p-4 rounded-lg bg-primary text-primary-foreground
          font-semibold hover:opacity-80 transition-all duration-200 hover:scale-[1.03]"
          >
            {t("cta.button")}
          </button>
        </div>
      </section>
    </main>


  )
}

/*
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}*/

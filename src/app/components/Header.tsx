"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";
import { useI18n } from "../../locales/client";
import LanguageSwitcher from "./LanguageSwitcher";
import { useMenu } from "../../context/MenuContext";

export function Header() {

    // const [isOpen, setIsOpen] = useState(false);
    const { isOpen, setIsOpen } = useMenu();

    // idioma 
    const t = useI18n();

    return (
        // <ThemeProvider>

        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-b-border/10 text-foreground">
            {/* Nav principal */}

            <nav className="flex items-center px-4 h-16 sm:hidden w-full">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl">
                    Franco
                </Link>
                {/* Toggle theme en el medio */}
                <div className="ml-auto gap-3 flex items-center">
                    <LanguageSwitcher />
                    <ThemeSwitcher />

                    <div className="w-px h-6 bg-border"></div>

                    {/* Botón hamburguesa a la derecha */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="ml-auto "
                    >
                        {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
                    </button>
                </div>
            </nav>

            {/* Menú móvil desplegable y centrar los elementos */}
            {isOpen && (
                <div className="absolute top-16 bg-background/85 sm:hidden animate-fade-in w-full
                border-t border-t-border/10                
                "
                >
                    <div className="flex flex-col p-4 gap-4 items-center text-foreground
                    "

                    >
                        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" href="/" onClick={() => setIsOpen(false)}>{t('header.home')}</Link>
                        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" href="/about" onClick={() => setIsOpen(false)}>{t('header.about')}</Link>
                        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" href="/projects" onClick={() => setIsOpen(false)}>{t('header.projects')}</Link>
                        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" href="/contact" onClick={() => setIsOpen(false)}>{t('header.contact')}</Link>
                    </div>
                </div>
            )}
            {/* ------------ TABLET (md >= width < lg) ------------ */}
            {/* TABLET (md ≥ 768px y < lg) */}
            <nav className="hidden sm:flex lg:hidden items-center px-6 h-16 justify-between">
                <Link href="/" className="font-bold text-xl 
                ">Franco</Link>

                <div className="flex items-center gap-6">
                    <Link className="text-md text-muted-foreground hover:text-foreground transition-colors" href="/">{t('header.home')}</Link>
                    <Link className="text-md text-muted-foreground hover:text-foreground transition-colors" href="/about">{t('header.about')}</Link>
                    <Link className="text-md text-muted-foreground hover:text-foreground transition-colors" href="/projects">{t('header.projects')}</Link>
                    <Link className="text-md text-muted-foreground hover:text-foreground transition-colors" href="/contact">{t('header.contact')}</Link>
                </div>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </nav>

            <nav className="hidden lg:flex items-center px-8 h-16 w-full">

                {/* Logo */}
                <div className="flex-none mr-6">
                    <Link href="/" className="font-bold text-2xl">
                        Franco
                    </Link>
                </div>

                {/* Switchers */}
                <div className="flex-none flex gap-4 mr-6 ml-6">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>

                {/* Espacio que empuja los links */}
                <div className="flex-[0.9]"></div>

                {/* Links */}
                <div className="flex-none flex gap-9 text-md mr-2">
                    <Link className="text-lg text-muted-foreground hover:text-foreground transition-colors" href="/">{t('header.home')}</Link>
                    <Link className="text-lg text-muted-foreground hover:text-foreground transition-colors" href="/about">{t('header.about')}</Link>
                    <Link className="text-lg text-muted-foreground hover:text-foreground transition-colors" href="/projects">{t('header.projects')}</Link>
                    <Link className="text-lg text-muted-foreground hover:text-foreground transition-colors" href="/contact">{t('header.contact')}</Link>
                </div>

            </nav>


        </header>
    );
}

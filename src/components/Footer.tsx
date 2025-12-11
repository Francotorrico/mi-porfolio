"use client";
import Link from "next/link";
import { Github, Icon, Linkedin, Mail } from "lucide-react";
import { useI18n } from "../locales/client";

export default function Footer() {

    const t = useI18n()
    const currentYear = new Date().getFullYear()


    const socialLinks = [
        { icon: Github, href: "https://github.com/Francotorrico", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/francotorrico/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:francotorrico1999@gmail.com", label: "Email" },
    ];

    const navigationLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];
    return (
        <footer
            className="bg-card pt-6"
        >
            <div
                className="
            max-w-7xl mx-auto px-4 py-10
            "
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* marca + descriptio */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-3 text-foreground">
                            Franco Torrico
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto md:mx-0">
                            {t("footer.description")}
                        </p>
                    </div>

                    {/* navegation */}
                    <div className="text-center md:text-left">
                        <h4 className="font-semibold text-foreground mb-3">
                            {t("footer.navigation")}
                        </h4>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* redes sociales  */}
                    <div className="text-center md:text-left">
                        <h4 className="font-semibold text-foreground mb-3">
                            {t("footer.connect")}
                        </h4>
                        <div className="flex justify-center md:justify-start gap-6">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="hover:text-primary text-muted-foreground transition-colors"
                                >
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>




                {/* copyright */}

                <div
                    className="border-t border-t-border/10 pt-6"
                >
                    <p
                        className="text-center text-sm text-muted-foreground"
                    >© {currentYear} Franco Torrico. {t("footer.copyright")}</p>
                </div>
            </div>
        </footer>

    )
}
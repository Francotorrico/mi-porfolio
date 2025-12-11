import { I18nProviderClient } from "../../locales/client";
import { ReactNode } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
    title: "Inicio | Franco Portfolio",
    description: "Página principal del portfolio de Franco.",
};
// 👇 IMPORTANTE para GitHub Pages
export function generateStaticParams() {
    return [
        { locale: "es" },
        { locale: "en" },
    ];
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    // const {t} = await import(`../../locales/server`);
    return (
        <I18nProviderClient locale={locale}>
            <Header />
            <main>{children}</main>
            <Footer />
        </I18nProviderClient>
    );
}

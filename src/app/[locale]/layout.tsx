import { I18nProviderClient } from "../../locales/client";
import { ReactNode } from "react";
import { Header } from "../components/Header";

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return (
        <I18nProviderClient locale={locale}>
            <Header />
            <main>{children}</main>
        </I18nProviderClient>
    );
}

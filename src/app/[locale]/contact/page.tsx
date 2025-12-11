"use client";
import { useI18n } from "../../../locales/client";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const t = useI18n();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setLoading(false);

        if (res.ok) {
            alert(t("contactPage.success"));
            form.reset();
        } else {
            alert("Error al enviar el mensaje.");
        }
    };

    return (
        <main className="min-h-screen bg-background/90 text-foreground px-4 pt-32 sm:px-6 lg:px-8 backdrop-blur-md">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 gradient-text inline-block">
                        {t("contactPage.title")}
                    </h1>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        {t("contactPage.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-xl glass-effect border border-border/50">
                            <h3 className="font-semibold text-xl mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p className="font-medium">francotorrico1999@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="font-medium">Remote / Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl glass-effect border border-border/50">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {t("contactPage.name")}
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {t("contactPage.email")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {t("contactPage.message")}
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    {t("contactPage.sending")}
                                </div>
                            ) : (
                                <>
                                    {t("contactPage.send")}
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

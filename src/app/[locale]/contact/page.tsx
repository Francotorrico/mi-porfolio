"use client";
import { useI18n } from "../../../lib/locales/client";
import { Mail, Send, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

export default function Contact() {
    const t = useI18n();

    const schema = z.object({
        name: z.string().min(1, t("contactPage.nameRequired")),
        email: z.string().email(t("contactPage.emailInvalid")),
        message: z.string().min(10, t("contactPage.messageMin")),
    });

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field: "name" | "email" | "message", value: string) => {
        setForm((prev) => {
            const next = { ...prev, [field]: value };
            const result = schema.safeParse(next);
            if (!result.success) {
                const fieldError = result.error.issues.find((e) => e.path[0] === field);
                setErrors((prev) => ({ ...prev, [field]: fieldError?.message }));
            } else {
                setErrors((prev) => ({ ...prev, [field]: undefined }));
            }
            return next;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = schema.safeParse(form);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            for (const err of result.error.issues) {
                fieldErrors[err.path[0] as string] = err.message;
            }
            setErrors(fieldErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                toast.success(t("contactPage.success"));
                setForm({ name: "", email: "", message: "" });
                setErrors({});
            } else {
                toast.error("Error al enviar el mensaje.");
            }
        } catch {
            toast.error("Error de red o servidor.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactItems = [
        { icon: Mail, label: t("contactPage.email"), value: "francotorrico1999@gmail.com", href: "mailto:francotorrico1999@gmail.com" },
        // { icon: Phone, label: t("contactPage.phone"), value: t("contactPage.phoneValue"), href: "tel:+5493624999999" },
        { icon: MapPin, label: t("contactPage.location"), value: t("contactPage.locationValue") },
        { icon: Linkedin, label: t("contactPage.linkedin"), value: "Franco Torrico", href: "https://linkedin.com/in/francotorrico" },
        { icon: Github, label: t("contactPage.github"), value: "Francotorrico", href: "https://github.com/Francotorrico" },
    ];

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
                    <div className="space-y-8">
                        <div className="p-6 rounded-xl glass-effect border border-border/50">
                            <h3 className="font-semibold text-xl mb-6">{t("contactPage.contactInfo")}</h3>
                            <div className="space-y-6">
                                {contactItems.map((item) => (
                                    <div key={item.label} className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-muted-foreground">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium hover:text-primary transition-colors truncate block"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="font-medium truncate">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl glass-effect border border-border/50">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {t("contactPage.nameLabel")}
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg bg-background/50 border outline-none transition-all ${
                                    errors.name
                                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                        : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                                }`}
                                placeholder="John Doe"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {t("contactPage.emailLabel")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg bg-background/50 border outline-none transition-all ${
                                    errors.email
                                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                        : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                                }`}
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {t("contactPage.messageLabel")}
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={form.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg bg-background/50 border outline-none transition-all resize-none ${
                                    errors.message
                                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                        : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
                                }`}
                                placeholder="..."
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isSubmitting ? (
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

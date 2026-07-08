"use client";
import { useI18n } from "../../lib/locales/client";

export default function ColorPreview() {
  const t = useI18n();

  const colors = [
    { name: "Background", class: "bg-background", textClass: "text-foreground" },
    { name: "Foreground", class: "bg-foreground", textClass: "text-background" },
    { name: "Primary", class: "bg-primary", textClass: "text-primary-foreground" },
    { name: "Secondary", class: "bg-secondary", textClass: "text-secondary-foreground" },
    { name: "Card", class: "bg-card", textClass: "text-card-foreground" },
    { name: "Muted", class: "bg-muted", textClass: "text-muted-foreground" },
    { name: "Border", class: "bg-border", textClass: "text-foreground" },
  ];

  return (
    <div className="min-h-screen w-full bg-background p-8">
      <h1 className="text-2xl font-bold mb-8 text-foreground">
        {t("colors.light_mode")} / {t("colors.dark_mode")}
      </h1>

      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`w-48 h-48 rounded-xl ${color.class} ${color.textClass} flex items-center justify-center shadow-lg border border-border`}
          >
            <p className="font-semibold text-sm">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

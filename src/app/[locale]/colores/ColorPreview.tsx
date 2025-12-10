"use client";

import ThemeSwitcher from "../../../components/ThemeSwitcher";

export default function ColorPreview() {
    const colors = [
        // Base
        { name: "background", variable: "--background", class: "bg-background" },
        { name: "foreground", variable: "--foreground", class: "text-foreground" },
        { name: "card", variable: "--card", class: "bg-card" },
        { name: "card-foreground", variable: "--card-foreground", class: "text-card-foreground" },
        { name: "popover", variable: "--popover", class: "bg-popover" },
        { name: "popover-foreground", variable: "--popover-foreground", class: "text-popover-foreground" },

        // Acciones / estados
        { name: "primary", variable: "--primary", class: "bg-primary text-primary-foreground" },
        { name: "primary-foreground", variable: "--primary-foreground", class: "text-primary-foreground" },
        { name: "secondary", variable: "--secondary", class: "bg-secondary" },
        { name: "secondary-foreground", variable: "--secondary-foreground", class: "text-secondary-foreground" },
        { name: "accent", variable: "--accent", class: "bg-accent text-accent-foreground" },
        { name: "accent-foreground", variable: "--accent-foreground", class: "text-accent-foreground" },
        { name: "muted", variable: "--muted", class: "bg-muted" },
        { name: "muted-foreground", variable: "--muted-foreground", class: "text-muted-foreground" },
        { name: "destructive", variable: "--destructive", class: "bg-destructive" },
        { name: "destructive-foreground", variable: "--destructive-foreground", class: "text-destructive-foreground" },

        // Inputs y estructura
        { name: "border", variable: "--border", class: "border-border" },
        { name: "input", variable: "--input", class: "bg-input" },
        { name: "ring", variable: "--ring", class: "ring-ring" },

        // Sidebar
        { name: "sidebar-background", variable: "--sidebar-background", class: "bg-sidebar-background" },
        { name: "sidebar-foreground", variable: "--sidebar-foreground", class: "text-sidebar-foreground" },
        { name: "sidebar-primary", variable: "--sidebar-primary", class: "bg-sidebar-primary text-sidebar-primary-foreground" },
        { name: "sidebar-primary-foreground", variable: "--sidebar-primary-foreground", class: "text-sidebar-primary-foreground" },
        { name: "sidebar-accent", variable: "--sidebar-accent", class: "bg-sidebar-accent" },
        { name: "sidebar-accent-foreground", variable: "--sidebar-accent-foreground", class: "text-sidebar-accent-foreground" },
        { name: "sidebar-border", variable: "--sidebar-border", class: "border-sidebar-border" },
        { name: "sidebar-ring", variable: "--sidebar-ring", class: "ring-sidebar-ring" },
    ];


    return (
        <div className="space-y-16 p-8">
            <ThemeSwitcher />
            {/* LIGHT MODE */}
            <div className="light p-4 border rounded-md">
                <h2 className="font-bold text-lg mb-4">Light Mode</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {colors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center">
                            <div
                                className="w-20 h-20 rounded-lg border"
                                style={{ backgroundColor: `hsl(var(${color.variable}))` }}
                            />
                            <span className="text-sm mt-1 font-medium">{color.name}</span>
                            <span className="text-xs text-gray-500">{color.class}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* DARK MODE */}
            <div className="dark p-4 border rounded-md bg-black">
                <h2 className="font-bold text-lg mb-4 text-white">Dark Mode</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {colors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center">
                            <div
                                className="w-20 h-20 rounded-lg border"
                                style={{ backgroundColor: `hsl(var(${color.variable}))` }}
                            />
                            <span className="text-sm mt-1 text-white font-medium">{color.name}</span>
                            <span className="text-xs text-gray-300">{color.class}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

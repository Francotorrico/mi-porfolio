"use client"

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');


    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-lg border border-border hover:bg-gray-200 transition-colors"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 " />   // gris suave
            ) : (
                <Sun className="w-5 h-5 text-yellow-500" />          // sol amarillo
            )}
        </button>
    );
}

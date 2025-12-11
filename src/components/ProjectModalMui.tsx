"use client";

import { ReactNode, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

export type LinkItem = {
    label: string;
    url: string;
    type?: "repo" | "web" | "docs";
};

type Props = {
    children: ReactNode;
    links?: LinkItem[];
};

export default function ProjectLinksToggle({ children, links }: Props) {
    const [open, setOpen] = useState(false);

    const getIcon = (type?: string) => {
        switch (type) {
            case "repo":
                return <GitHubIcon fontSize="small" />;
            case "docs":
                return <DescriptionIcon fontSize="small" />;
            default:
                return <LaunchIcon fontSize="small" />;
        }
    };

    return (
    <div className="w-full">
      {/* BOTÓN QUE ABRE EL DESPLIEGUE */}
      <span onClick={() => setOpen(!open)} className="cursor-pointer">
        {children}
      </span>

      {/* DESPLEGABLE IGUAL A TU ESTILO */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[999px] mt-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 border-t pt-3">
          {links?.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg border hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {getIcon(item.type)}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
"use client";

type Tab = {
  key: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
};

export default function PillTabs({ tabs, active, onChange }: Props) {
  return (
    <div className="flex items-center gap-1 border border-border rounded-lg p-1 bg-secondary w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-1.5 rounded text-sm font-medium transition-all ${
            active === tab.key
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

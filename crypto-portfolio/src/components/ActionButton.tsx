import type { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
}

export function ActionButton({ icon: Icon, label }: ActionButtonProps) {
  return (
    <button className="flex flex-col items-center gap-2 flex-1">
      <div className="w-12 h-12 rounded-[14px] bg-border-subtle border border-accent-purple/[0.19] flex items-center justify-center">
        <Icon size={22} className="text-accent-purple" />
      </div>
      <span className="text-xs font-medium text-foreground-secondary font-body">
        {label}
      </span>
    </button>
  );
}

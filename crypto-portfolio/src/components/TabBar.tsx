import {
  House,
  ChartBar,
  ArrowLeftRight,
  Wallet,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Tab {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

const tabs: Tab[] = [
  { icon: House, label: "HOME", active: true },
  { icon: ChartBar, label: "MARKETS" },
  { icon: ArrowLeftRight, label: "TRADE" },
  { icon: Wallet, label: "WALLET" },
  { icon: User, label: "PROFILE" },
];

export function TabBar() {
  return (
    <div className="w-full pt-3 px-[21px] pb-[21px] flex justify-center">
      <div className="flex w-full h-[62px] rounded-[36px] bg-surface-primary border border-border-subtle p-1">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex-1 flex flex-col items-center justify-center gap-1 rounded-[26px] transition-colors ${
              tab.active
                ? "bg-accent-purple"
                : "bg-transparent hover:bg-white/5"
            }`}
          >
            <tab.icon
              size={18}
              className={tab.active ? "text-white" : "text-foreground-muted"}
            />
            <span
              className={`text-[10px] font-medium tracking-[0.5px] uppercase font-body ${
                tab.active
                  ? "text-white font-semibold"
                  : "text-foreground-muted"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

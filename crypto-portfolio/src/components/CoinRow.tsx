import type { ReactNode } from "react";

interface CoinRowProps {
  icon: ReactNode;
  name: string;
  ticker: string;
  price: string;
  change: string;
  positive: boolean;
}

export function CoinRow({ icon, name, ticker, price, change, positive }: CoinRowProps) {
  return (
    <div className="flex items-center gap-3 px-0 py-3.5">
      <div className="w-10 h-10 shrink-0">{icon}</div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="text-[15px] font-semibold text-foreground-primary font-body">
          {name}
        </span>
        <span className="text-xs text-foreground-muted font-mono">{ticker}</span>
      </div>
      <div className="flex flex-col gap-0.5 items-end">
        <span className="text-[15px] font-semibold text-foreground-primary font-body">
          {price}
        </span>
        <span
          className={`text-xs font-medium font-mono ${
            positive ? "text-positive" : "text-negative"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

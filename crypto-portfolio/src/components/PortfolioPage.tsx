import {
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  ArrowLeftRight,
  TrendingUp,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react";
import { ActionButton } from "./ActionButton";
import { CoinRow } from "./CoinRow";
import { TabBar } from "./TabBar";

const coins = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    price: "$28,431.20",
    change: "+2.14%",
    positive: true,
    letter: "₿",
    bg: "#F7931A",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    price: "$1,842.67",
    change: "+4.52%",
    positive: true,
    letter: "Ξ",
    bg: "#627EEA",
  },
  {
    name: "Solana",
    ticker: "SOL",
    price: "$142.38",
    change: "-1.07%",
    positive: false,
    letter: "S",
    gradient: "linear-gradient(225deg, #9945FF 0%, #14F195 100%)",
  },
  {
    name: "Dogecoin",
    ticker: "DOGE",
    price: "$0.0821",
    change: "+8.91%",
    positive: true,
    letter: "D",
    bg: "#C2A633",
  },
];

function CoinIcon({
  letter,
  bg,
  gradient,
}: {
  letter: string;
  bg?: string;
  gradient?: string;
}) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center"
      style={{ background: gradient || bg }}
    >
      <span className="text-lg font-bold text-white font-heading">{letter}</span>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div className="w-[390px] h-[844px] bg-surface-primary rounded-[40px] overflow-hidden flex flex-col mx-auto">
      {/* Status Bar */}
      <div className="flex items-center justify-between h-[62px] px-6 shrink-0">
        <span className="text-base font-semibold text-foreground-primary font-body">
          9:41
        </span>
        <div className="flex items-center gap-1.5">
          <Signal size={16} className="text-foreground-primary" />
          <Wifi size={16} className="text-foreground-primary" />
          <BatteryFull size={16} className="text-foreground-primary" />
        </div>
      </div>

      {/* App Content */}
      <div className="flex-1 flex flex-col gap-6 px-5 pb-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] text-foreground-muted font-body">
              Good Morning
            </span>
            <span className="text-[22px] font-bold text-foreground-primary font-heading">
              Alex Chen
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center">
            <span className="text-lg font-semibold text-white font-heading">
              A
            </span>
          </div>
        </div>

        {/* Balance Card */}
        <div
          className="flex flex-col gap-3 p-6 rounded-2xl border border-accent-purple/[0.13]"
          style={{
            background:
              "linear-gradient(135deg, #1A1A2E 0%, #16132B 50%, #1A0A2E 100%)",
          }}
        >
          <span className="text-[13px] font-medium text-foreground-muted font-body">
            Total Balance
          </span>
          <div className="flex items-end gap-3">
            <span className="text-[34px] font-bold text-foreground-primary font-heading">
              $47,832.56
            </span>
            <div className="flex items-center gap-1 bg-positive/[0.13] rounded-lg px-2 py-1">
              <TrendingUp size={14} className="text-positive" />
              <span className="text-xs font-semibold text-positive font-mono">
                +3.24%
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-between">
          <ActionButton icon={ArrowUpRight} label="Send" />
          <ActionButton icon={ArrowDownLeft} label="Receive" />
          <ActionButton icon={CreditCard} label="Buy" />
          <ActionButton icon={ArrowLeftRight} label="Swap" />
        </div>

        {/* Portfolio Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-foreground-primary font-heading">
              Portfolio
            </span>
            <span className="text-[13px] font-medium text-accent-purple font-body cursor-pointer">
              See All
            </span>
          </div>

          {/* Coin List */}
          <div className="flex flex-col">
            {coins.map((coin, i) => (
              <div key={coin.ticker}>
                <CoinRow
                  icon={
                    <CoinIcon
                      letter={coin.letter}
                      bg={coin.bg}
                      gradient={coin.gradient}
                    />
                  }
                  name={coin.name}
                  ticker={coin.ticker}
                  price={coin.price}
                  change={coin.change}
                  positive={coin.positive}
                />
                {i < coins.length - 1 && (
                  <div className="h-px bg-border-subtle" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="shrink-0">
        <TabBar />
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface BalanceCardProps {
  balance: number;
  totalIn: number;
  totalOut: number;
}

export function BalanceCard({ balance, totalIn, totalOut }: BalanceCardProps) {
  return (
    <Card className="p-8">
      <div className="space-y-8">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Current Balance
          </p>
          <p
            className="text-5xl md:text-6xl font-bold font-mono tracking-tight"
            data-testid="text-balance"
          >
            ${balance.toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Total Cash In</span>
            </div>
            <p
              className="text-2xl font-semibold font-mono text-chart-2"
              data-testid="text-total-in"
            >
              ${totalIn.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">Total Cash Out</span>
            </div>
            <p
              className="text-2xl font-semibold font-mono text-destructive"
              data-testid="text-total-out"
            >
              ${totalOut.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

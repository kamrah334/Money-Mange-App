import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { BalanceCard } from "@/components/balance-card";
import { StatCard } from "@/components/stat-card";
import { Wallet, TrendingUp, Calendar } from "lucide-react";

export default function Dashboard() {
  const transactions = useLiveQuery(() => db.transactions.toArray(), []);

  const totalIn = transactions
    ?.filter((t) => t.type === "in")
    .reduce((sum, t) => sum + t.amount, 0) || 0;

  const totalOut = transactions
    ?.filter((t) => t.type === "out")
    .reduce((sum, t) => sum + t.amount, 0) || 0;

  const balance = totalIn - totalOut;

  const thisMonth = new Date().getMonth();
  const thisMonthTransactions = transactions?.filter(
    (t) => new Date(t.date).getMonth() === thisMonth
  ) || [];

  const thisMonthExpenses = thisMonthTransactions
    .filter((t) => t.type === "out")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of your financial activity
        </p>
      </div>

      <BalanceCard balance={balance} totalIn={totalIn} totalOut={totalOut} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Transactions"
          value={transactions?.length || 0}
          icon={Wallet}
        />
        <StatCard
          title="This Month Spending"
          value={`$${thisMonthExpenses.toFixed(2)}`}
          icon={TrendingUp}
        />
        <StatCard
          title="Last Transaction"
          value={
            transactions && transactions.length > 0
              ? new Date(transactions[transactions.length - 1].date).toLocaleDateString()
              : "N/A"
          }
          icon={Calendar}
        />
      </div>
    </div>
  );
}

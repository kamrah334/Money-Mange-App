import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { CategoryChart } from "@/components/category-chart";
import { MonthlyTrend } from "@/components/monthly-trend";
import { categories } from "@shared/schema";

export default function Analytics() {
  const transactions = useLiveQuery(() => db.transactions.toArray(), []);

  const categoryData = categories
    .map((category) => {
      const total = transactions
        ?.filter((t) => t.category === category && t.type === "out")
        .reduce((sum, t) => sum + t.amount, 0) || 0;
      return { name: category, value: total };
    })
    .filter((d) => d.value > 0);

  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (5 - i));
    const month = date.toLocaleString("default", { month: "short" });
    const monthNum = date.getMonth();
    const year = date.getFullYear();

    const monthTransactions = transactions?.filter((t) => {
      const tDate = new Date(t.date);
      return tDate.getMonth() === monthNum && tDate.getFullYear() === year;
    }) || [];

    const income = monthTransactions
      .filter((t) => t.type === "in")
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = monthTransactions
      .filter((t) => t.type === "out")
      .reduce((sum, t) => sum + t.amount, 0);

    return { month, income, expenses };
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Visualize your spending patterns
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CategoryChart data={categoryData} />
        <MonthlyTrend data={monthlyData} />
      </div>
    </div>
  );
}

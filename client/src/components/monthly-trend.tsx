import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card } from "@/components/ui/card";

interface MonthlyData {
  month: string;
  income: number;
  expenses: number;
}

interface MonthlyTrendProps {
  data: MonthlyData[];
}

export function MonthlyTrend({ data }: MonthlyTrendProps) {
  return (
    <Card className="p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6">Monthly Trend</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--popover-border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="income" fill="hsl(var(--chart-2))" name="Income" />
            <Bar dataKey="expenses" fill="hsl(var(--destructive))" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

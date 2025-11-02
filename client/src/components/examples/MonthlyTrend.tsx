import { MonthlyTrend } from '../monthly-trend';

const mockData = [
  { month: 'Jan', income: 5000, expenses: 3200 },
  { month: 'Feb', income: 5200, expenses: 2800 },
  { month: 'Mar', income: 5000, expenses: 3500 },
  { month: 'Apr', income: 5500, expenses: 3100 },
  { month: 'May', income: 5000, expenses: 2900 },
  { month: 'Jun', income: 5300, expenses: 3400 },
];

export default function MonthlyTrendExample() {
  return <MonthlyTrend data={mockData} />;
}

import { CategoryChart } from '../category-chart';

const mockData = [
  { name: 'Food', value: 450 },
  { name: 'Utilities', value: 320 },
  { name: 'Shopping', value: 280 },
  { name: 'Transport', value: 150 },
  { name: 'Entertainment', value: 100 },
];

export default function CategoryChartExample() {
  return <CategoryChart data={mockData} />;
}

import { StatCard } from '../stat-card';
import { Wallet } from 'lucide-react';

export default function StatCardExample() {
  return (
    <StatCard
      title="This Month"
      value="$1,240"
      icon={Wallet}
      trend={{ value: "+12.5%", isPositive: true }}
    />
  );
}

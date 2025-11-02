import { TransactionList } from '../transaction-list';

const mockTransactions = [
  {
    id: '1',
    amount: 50.00,
    type: 'out' as const,
    description: 'Grocery shopping',
    category: 'Food' as const,
    date: '2024-01-15',
  },
  {
    id: '2',
    amount: 3000.00,
    type: 'in' as const,
    description: 'Monthly salary',
    category: 'Income' as const,
    date: '2024-01-01',
  },
  {
    id: '3',
    amount: 120.50,
    type: 'out' as const,
    description: 'Electric bill',
    category: 'Utilities' as const,
    date: '2024-01-10',
  },
];

export default function TransactionListExample() {
  return (
    <TransactionList
      transactions={mockTransactions}
      onEdit={(t) => console.log('Edit:', t)}
      onDelete={(id) => console.log('Delete:', id)}
    />
  );
}

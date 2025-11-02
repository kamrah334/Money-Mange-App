import { TransactionForm } from '../transaction-form';

export default function TransactionFormExample() {
  return (
    <TransactionForm
      onSubmit={(data) => console.log('Transaction submitted:', data)}
    />
  );
}

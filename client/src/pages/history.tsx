import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { TransactionList } from "@/components/transaction-list";
import { useToast } from "@/hooks/use-toast";

export default function History() {
  const { toast } = useToast();
  const transactions = useLiveQuery(
    () => db.transactions.orderBy("date").reverse().toArray(),
    []
  );

  const handleEdit = (transaction: any) => {
    console.log("Edit transaction:", transaction);
    toast({
      title: "Edit",
      description: "Edit functionality will be available in the full version",
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await db.transactions.delete(id);
      toast({
        title: "Deleted",
        description: "Transaction deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete transaction",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Transaction History
        </h1>
        <p className="text-muted-foreground mt-2">
          View and manage all your transactions
        </p>
      </div>

      <TransactionList
        transactions={transactions || []}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

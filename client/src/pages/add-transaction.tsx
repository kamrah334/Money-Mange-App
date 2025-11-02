import { TransactionForm } from "@/components/transaction-form";
import { db } from "@/lib/db";
import { type InsertTransaction } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function AddTransaction() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const handleSubmit = async (data: InsertTransaction) => {
    try {
      await db.transactions.add({
        ...data,
        id: crypto.randomUUID(),
      });

      toast({
        title: "Success",
        description: "Transaction added successfully",
      });

      setLocation("/history");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add transaction",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Add Transaction
        </h1>
        <p className="text-muted-foreground mt-2">
          Record a new income or expense
        </p>
      </div>

      <TransactionForm onSubmit={handleSubmit} />
    </div>
  );
}

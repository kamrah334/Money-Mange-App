import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertTransactionSchema, type InsertTransaction, categories } from "@shared/schema";
import { categorizeTransaction } from "@/lib/categorizer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

interface TransactionFormProps {
  onSubmit: (transaction: InsertTransaction) => void;
  defaultValues?: Partial<InsertTransaction>;
}

export function TransactionForm({ onSubmit, defaultValues }: TransactionFormProps) {
  const [transactionType, setTransactionType] = useState<"in" | "out">(
    defaultValues?.type || "out"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<InsertTransaction>({
    resolver: zodResolver(insertTransactionSchema),
    defaultValues: {
      type: "out",
      category: "Others",
      date: new Date().toISOString().split("T")[0],
      ...defaultValues,
    },
  });

  const description = watch("description");

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue("description", value);
    if (value) {
      const suggestedCategory = categorizeTransaction(value);
      setValue("category", suggestedCategory);
    }
  };

  const handleFormSubmit = (data: InsertTransaction) => {
    onSubmit(data);
  };

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Transaction Type</Label>
          <div className="flex gap-3">
            <Button
              type="button"
              variant={transactionType === "in" ? "default" : "outline"}
              className="flex-1"
              onClick={() => {
                setTransactionType("in");
                setValue("type", "in");
              }}
              data-testid="button-type-in"
            >
              Cash In
            </Button>
            <Button
              type="button"
              variant={transactionType === "out" ? "default" : "outline"}
              className="flex-1"
              onClick={() => {
                setTransactionType("out");
                setValue("type", "out");
              }}
              data-testid="button-type-out"
            >
              Cash Out
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount" className="text-sm font-medium">
            Amount
          </Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            placeholder="0.00"
            className="text-2xl font-mono font-semibold"
            {...register("amount", { valueAsNumber: true })}
            data-testid="input-amount"
          />
          {errors.amount && (
            <p className="text-sm text-destructive">{errors.amount.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium">
            Description
          </Label>
          <Input
            id="description"
            placeholder="e.g., Grocery shopping at Walmart"
            {...register("description")}
            onChange={handleDescriptionChange}
            data-testid="input-description"
          />
          {errors.description && (
            <p className="text-sm text-destructive">{errors.description.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium">
            Category
          </Label>
          <Select
            defaultValue={defaultValues?.category || "Others"}
            onValueChange={(value) => setValue("category", value as any)}
          >
            <SelectTrigger id="category" data-testid="select-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-sm text-destructive">{errors.category.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-medium">
            Date
          </Label>
          <Input
            id="date"
            type="date"
            {...register("date")}
            data-testid="input-date"
          />
          {errors.date && (
            <p className="text-sm text-destructive">{errors.date.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
          Add Transaction
        </Button>
      </form>
    </Card>
  );
}

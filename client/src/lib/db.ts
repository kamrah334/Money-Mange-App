import Dexie, { type Table } from 'dexie';
import type { Transaction } from '@shared/schema';

export class BudgetDatabase extends Dexie {
  transactions!: Table<Transaction, string>;

  constructor() {
    super('BudgetManager');
    this.version(1).stores({
      transactions: 'id, type, category, date, amount',
    });
  }
}

export const db = new BudgetDatabase();

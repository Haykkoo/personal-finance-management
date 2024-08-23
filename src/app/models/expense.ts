export interface Expense {
  id: number;
  amount: number;
  category: string;
  date: Date;
  description?: string;
}

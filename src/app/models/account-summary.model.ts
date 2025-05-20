import { Transaction } from './transaction.model';

export interface AccountSummary {
  accountNumber: string;
  type: string;
  balance: number;
  transactions: Transaction[];
}

import { AccountSummary } from './account-summary.model';

export interface ClientSummary {
  clientId: number;
  fullName: string;
  accounts: AccountSummary[];
}

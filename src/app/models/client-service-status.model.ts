export interface ClientServiceStatus {
  name: string; // "VIREMENT", "PAIEMENTS_EN_LIGNE", etc.
  status: 'ACTIVE' | 'SUSPENDED' | 'NEVER_ACTIVATED';
}

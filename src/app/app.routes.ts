import { Routes } from '@angular/router';
import { BankLayoutComponent } from './layout/bank-layout/bank-layout.component';
import { DashboardComponent } from './bank/dashboard/dashboard.component';
import { EnrollComponent } from './bank/enroll/enroll.component';
import { ModifyComponent } from './bank/modify/modify.component';
import { DeleteComponent } from './bank/delete/delete.component';

export const routes: Routes = [
  {
    path: '',
    component: BankLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'enroll', component: EnrollComponent },
      { path: 'modify', component: ModifyComponent },
      { path: 'delete', component: DeleteComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

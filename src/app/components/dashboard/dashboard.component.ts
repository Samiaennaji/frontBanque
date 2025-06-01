// components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clientCount: number = 0;
  accountCount: number = 0;

  constructor(
    private dashboardService: DashboardService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.dashboardService.getClientCount().subscribe(count => this.clientCount = count);
    this.accountService.getAccountCount().subscribe(count => this.accountCount = count);
  }
}

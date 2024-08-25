//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseService } from '../services/expense.service';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-expense',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../services/income.service';
import { Income } from '../models/income';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-income',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './income.component.html'
  //styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomes: Income[] = [];

  constructor(private incomeService: IncomeService) { }

  ngOnInit(): void {
    this.loadIncomes();
  }

  loadIncomes(): void {
    this.incomeService.getAll().subscribe(data => {
      this.incomes = data;
    });
  }
}

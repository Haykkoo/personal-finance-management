//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
//import { Investment } from '../models/investment';
import { Investment } from '../models/investment';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,

  selector: 'app-investment',
  imports: [CommonModule],
  templateUrl: './investment.component.html'
  //styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  investments: Investment[] = [];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.loadInvestments();
  }

  loadInvestments(): void {
    this.investmentService.getAll().subscribe(data => {
      this.investments = data;
    });
  }
}

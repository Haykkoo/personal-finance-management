// src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { InvestmentComponent } from './investment/investment.component';


export const routes: Routes = [
  { path: '', redirectTo: '/income', pathMatch: 'full' },
  { path: 'income', component: IncomeComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'investment', component: InvestmentComponent },
];

//const routes: Routes = [
//  { path: '', redirectTo: '/income', pathMatch: 'full' },
//  { path: 'income', component: IncomeComponent },
//  { path: 'expense', component: ExpenseComponent },
//  { path: 'investment', component: InvestmentComponent },
//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

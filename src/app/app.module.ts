//import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { InvestmentComponent } from './investment/investment.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    ExpenseComponent,
    InvestmentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,


  ],

  providers: [
    HttpClient,
    provideHttpClient(withFetch()),

  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

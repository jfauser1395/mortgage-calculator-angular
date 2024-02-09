import { Component, inject } from '@angular/core';
import { MonthlyMortgageCalculationService } from '../services/monthly-mortgage-calculation.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-loan-form-parameters',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule, 
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  templateUrl: './loan-form-parameters.component.html',
  styleUrl: './loan-form-parameters.component.scss'
})
export class LoanFormParametersComponent {
  constructor(private monthlyMortgageCalculationService: MonthlyMortgageCalculationService){
    this.monthlyCosts = 0;
  }

  principalLoan = new FormControl('');
  yearlyInterestRate = new FormControl('');
  numberOfYearsPayments = new FormControl('');

  monthlyCosts: number;

  onSubmit() {
    let pLoan = Number(this.principalLoan.value);
    let yInterestRate = Number(this.yearlyInterestRate.value);
    let nOfYearsPayments = Number(this.numberOfYearsPayments.value);

    console.log('This is the principal loan: ' + pLoan + '\n This is the yearly interest rates:' + yInterestRate + '\n This is the number of years payed: ' + nOfYearsPayments)

    this.monthlyCosts = this.monthlyMortgageCalculationService.monthlyMortgagePayment(pLoan, yInterestRate, nOfYearsPayments)
    
    console.log('Result: ' + this.monthlyCosts)
  }
}
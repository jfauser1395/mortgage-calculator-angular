import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyMortgageCalculationService {
  // Declare the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
monthlyMortgagePayment(principalLoan:number, rate:number, numberOfYearsPayments:number) {

    let monthlyInterestRate = rate / 100 / 12;
    let numberOfPayments = numberOfYearsPayments * 12
    
    let result = (principalLoan * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    if((principalLoan && rate && numberOfYearsPayments) !== 0) {
      return `Your monthly costs ${result} $`
    } 
    else {
      return 'Please enter all fields!'
    }
  } 
}
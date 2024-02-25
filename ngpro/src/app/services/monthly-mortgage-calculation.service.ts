import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonthlyMortgageCalculationService {
  // Declare the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
  monthlyMortgagePayment(
    principalLoan: number,
    rate: number,
    numberOfYearsPayments: number,
  ) {
    let monthlyInterestRate = rate / 100 / 12;
    let numberOfPayments = numberOfYearsPayments * 12;

    let finalMonthlyPayment =
      (principalLoan * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    let totalPayment = finalMonthlyPayment * numberOfPayments;
    let payedInterest = totalPayment - principalLoan;

    if ((principalLoan && rate && numberOfYearsPayments) !== 0) {
      return (
        `Your monthly costs: ${finalMonthlyPayment.toFixed(2)} $ \n` +
        `Your payed interests: ${payedInterest.toFixed(2)} $ \n` +
        `Your total payment: ${totalPayment.toFixed(2)} $`
      ).split('\n');
    } else {
      return ['Please enter all fields!'];
    }
  }
}

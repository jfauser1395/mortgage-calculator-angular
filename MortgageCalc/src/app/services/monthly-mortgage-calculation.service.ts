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
    downPayments: number,
  ): number[] {
    let monthlyInterestRate = rate / 100 / 12;
    let numberOfPayments = numberOfYearsPayments * 12;
    let remLoan = principalLoan - downPayments;

    let finalMonthlyPayment =
      (remLoan * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    let totalPayment = finalMonthlyPayment * numberOfPayments;
    let payedInterest = totalPayment - remLoan;

    return [
      Number(totalPayment.toFixed(2)),
      Number(payedInterest.toFixed(2)),
      Number(finalMonthlyPayment.toFixed(2)),
    ];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyMortgageCalculationService {
  // Declare the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
monthlyMortgagePayment(P:number, r:number, n:number) {
  // P is the principal loan amount
  // r is the monthly interest rate
  // n is the number of payments

  // The formula to calculate the monthly payment is (P * r) / (1 - (1 + r) ^ -n)
  // The Math.pow function is used to calculate (1 + r) to the power of -n
  return  (P * r) / (1 - Math.pow(1 + r, -n));
}
}
